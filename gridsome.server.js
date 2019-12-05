// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios');
const data = require('./temp/guns.json');
const slugify = require('@sindresorhus/slugify');


module.exports = function (api) {
  // const slugReplacement = {
  //   replacement: '-', // replace spaces with replacement
  //   remove: /[^\w\s-]/g, // regex to remove characters
  //   lower: true 
  // };

  // api.onCreateNode(options => {
  //   if (options.internal.typeName === 'Guns') {
  //     options.recordType = options.internal.typeName;
  //     options.slug = slugify(options.title, slugReplacement);
  //     return{
  //       ...options
  //     }
  //   }
  // })
  

  api.loadSource(actions => {
    axios.get('./temp/guns.json')

    const guns = actions.addCollection('Guns')

    for (const item of data.Guns) {
      guns.addNode({
        id: item.SerialNumber,        
        title: (item.Model) ? `${item.Make} ${item.Model}` : `${item.Make}`,
        make: item.Make,
        model: item.Model,
        type: item.Type,
        mechanism: item.Mechanism,
        calibre: item.Calibre,
        variant: item.Variant,
        orientation: item.Orientation,
        trigger: item.Trigger,
        barrelLength: item.BarrelLengthInches,
        condition: item.Condition,
        price: item.Price,
        stockNumber: item.StockNumber,
        serialNumber: item.SerialNumber,
        images: item.Images,
        licence: item.Licence
      })
    }
  })
  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      allGuns {
        edges {
          node {
            id
            title
            make
            model
            type
            mechanism
            calibre
            variant
            orientation
            trigger
            barrelLength
            condition
            price
            licence
            images {
              FullPath
            }
          }
        }
      }
    }`)

    data.allGuns.edges.forEach(({ node }) => {
      createPage({
        path: `/gun/${node.title}/${node.id}`,
        component: './src/templates/Guns.vue',
        context: {
          id: node.id,        
          title: node.title,
          make: node.make,
          model: node.model,
          variant: node.variant,
          type: node.type,
          mechanism: node.mechanism,
          calibre: node.calibre,
          orientation: node.orientation,
          trigger: node.trigger,
          barrelLength: node.barrelLength,
          condition: node.condition,
          price: node.price,
          licence: node.licence,
          images: node.images
        }
      })
    })
  })
}
