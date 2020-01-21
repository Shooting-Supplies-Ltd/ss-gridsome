// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Shooting Supplies Ltd - Guns',
  siteDescription: "Shooting Supplies Ltd are the Midlands leading Firearms Dealer & Shooting Supplies Store. Your one-stop-shop for all of your shooting needs.",
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
    }
  },
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
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/blog/*.md",
        typeName: "Post",
        remark: {
          plugins: [
            ['gridsome-plugin-remark-youtube']
          ]
        }
      }
    },
    {
    use: `gridsome-plugin-netlify-cms`,
    options: {
      flexsearch: {
        profile: 'match'
      },
      publicPath: `/admin`,
      plugins: [`netlify-cms-widget-youtube`]
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        collections: [
          {
            typeName: 'Guns',
            indexName: 'Guns',
            fields: ['title', 'slug', 'images', 'price', 'mechanism', 'id']
          }
        ],
        searchFields: ['title', 'mechanism']
      }
    },
  ],
  templates: {
    Post: '/blog/:title'
  }
}

  
 

