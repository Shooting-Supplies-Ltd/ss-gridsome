// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Shooting Supplies Ltd - Guns',
  siteDescription: "Shooting Supplies Ltd are the Midlands leading Firearms Dealer & Shooting Supplies Store. Your one-stop-shop for all of your shooting needs.",
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: '',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Guns',
            indexName: 'Guns',
            fields: ['title','variant','condition','slug', 'images', 'price', 'mechanism', 'id', 'description']
          }
        ],
        searchFields: ['title', 'variant', 'mechanism', 'id', 'description']
      }
    }
  ],
}

  
 

