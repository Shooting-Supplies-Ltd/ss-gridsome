// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
const slugify = require("@sindresorhus/slugify");
const getCompleteItems = require('./lsretail/getCompleteItems')

const consumerKey = process.env.WOO_CONSUMER_KEY;
const consumerSecret = process.env.WOO_CONSUMER_SECRET;
const wooUrl = process.env.WOO_SITE_URL;

const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
const WooCommerce = new WooCommerceRestApi({
  url: wooUrl,
  consumerKey: consumerKey,
  consumerSecret: consumerSecret,
  version: "wc/v3",
  queryStringAuth: true
});

module.exports = async function(api) {
  
  api.loadSource(async actions => {
    const data = await getCompleteItems((err, data) => {
      if (err) console.error(err)
      return data
    })

    const lsretail = actions.addCollection('lsretail')

    for (const item of data) {
      lsretail.addNode({
        ...item
      })
    }
  })

  api.loadSource(async actions => {
    const { data } = await axios.get(process.env.GRIDSOME_API_URL);

    const guns = actions.addCollection("Guns");

    for (const item of data.Guns) {
      if (item.ImageCount === 0) continue;
      guns.addNode({
        id: item.SerialNumber,
        title: item.Model ? `${item.Make} ${item.Model}` : `${item.Make}`,
        make: item.Make,
        model: item.Model,
        type: item.Type,
        mechanism: item.Mechanism,
        calibre: item.Calibre,
        variant: item.Variant,
        orientation: item.Orientation,
        trigger: item.Trigger,
        barrelLength: item.BarrelLengthInches,
        description: item.Description,
        condition: item.Condition,
        price: item.Price,
        stockNumber: item.StockNumber,
        serialNumber: item.SerialNumber,
        imageCount: item.ImageCount,
        images: [...item.Images],
        licence: item.Licence,
        slug: slugify(`${item.Make}${item.Model}${item.SerialNumber}`)
      });
    }
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allGuns {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    data.allGuns.edges.forEach(({ node }) => {
      createPage({
        path: `/guns/${node.slug}`,
        component: "./src/templates/Guns.vue",
        context: {
          id: node.id
        }
      });
    });
  });

  api.loadSource(async ({ addCollection }) => {
    const products = addCollection("WooProducts");

    let final = [];
    for (let step = 0; step < 53; step++) {
      let { data } = await WooCommerce.get("products", {
        per_page: 100,
        offset: step * 100
      });
      final = [...final, ...data];
    }
    for (const item of final) {
      products.addNode({ ...item });
    }
  });

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allWooProducts(filter: { status: { eq: "publish" } }) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `);

    data.allWooProducts.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.slug}`,
        component: "./src/templates/Products.vue",
        context: {
          id: node.id
        }
      });
    });
  });
};
