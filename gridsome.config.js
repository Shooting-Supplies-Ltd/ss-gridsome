// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Shooting Supplies Ltd - Guns',
  siteDescription: "Your one stop shop for guns of all types, both new & used.",
  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: 'https://shootingsuppliesltd.co.uk', // required
        apiBase: 'wp-json',
        typeName: 'WordPress',
        perPage: 100,
        concurrent: 10
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: '',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
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
            fields: ['title','variant','condition','slug']
          }
        ],
        searchFields: ['title', 'variant']
      }
    }
  ],
  templates: {
    WordPressCategory: '/blog/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/blog/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/blog/tag/:slug' // adds route for "post_tag" post type (Optional)
  },
}

  
 

