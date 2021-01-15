// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Shooting Supplies Ltd",
  siteDescription: "The Midlands Leading Shooting Supplier",
  siteUrl: "https://www.shootingsuppliesltd.co.uk",
  transformers: {
    remark: {
      externalLinksTarget: "_blank",
      externalLinksRel: ["nofollow", "noopener", "noreferrer"],
      anchorClassName: "icon icon-link"
    }
  },
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "",
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "./src/blog/*.md",
        typeName: "Post",
        remark: {
          plugins: [["gridsome-plugin-remark-youtube"]]
        }
      }
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        collections: [
          {
            typeName: "Guns",
            indexName: "Guns",
            fields: [
              "id",
              "title",
              "slug",
              "images",
              "price",
              "mechanism",
              "variant",
              "condition"
            ]
          },
        ],
        searchFields: ["title", "mechanism", "calibre"]
      }
    },
    {
      use: "@gridsome/plugin-google-analytics",
      options: {
        id: "UA-144478142-2"
      }
    },
    {
      use: 'gridsome-plugin-ackee',
      options: {
        domain: 'https://ackee-k395.onrender.com/',
        domainId: 'a47c7716-dba1-4ef5-b62b-d00ad176301a'
      }
    },
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000, // default
        config: {
          "/guns/*": {
            changefreq: "daily",
            priority: 0.8
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-modal'
    },
  ],
  templates: {
    Post: "/blog/:slug"
  }
};
