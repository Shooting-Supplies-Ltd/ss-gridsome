// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");
const slugify = require("@sindresorhus/slugify");
const getCompleteItems = require('./lsretail/getCompleteItems')

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

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`
      {
        allLsretail {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    `);

    data.allLsretail.edges.forEach(({ node }) => {
      createPage({
        path: `/products/${node.title}`,
        component: "./src/templates/Products.vue",
        context: {
          id: node.id
        }
      });
    });
  });


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
};
