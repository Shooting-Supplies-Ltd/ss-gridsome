import plugin_gridsome_plugin_tailwindcss_5 from "/home/darryl/Projects/shootingSupplies/ss-gridsome/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_7 from "/home/darryl/Projects/shootingSupplies/ss-gridsome/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_8 from "/home/darryl/Projects/shootingSupplies/ss-gridsome/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"
import plugin_gridsome_plugin_modal_10 from "/home/darryl/Projects/shootingSupplies/ss-gridsome/node_modules/gridsome-plugin-modal/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"","purgeConfig":{"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{},{},{},{},{},{},{},{}]},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}},"shouldPurge":false,"shouldImport":true,"shouldTimeTravel":true,"shouldPurgeUnusedKeyframes":true,"importUrlConfig":{"modernBrowser":true}}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_7,
    options: {"pathPrefix":"","siteUrl":"https://www.shootingsuppliesltd.co.uk","collections":[{"typeName":"Guns","indexName":"Guns","fields":["id","title","slug","images","price","mechanism","variant","condition"]}],"searchFields":["title","mechanism","calibre"],"chunk":false,"autoFetch":true,"autoSetup":true,"flexsearch":{"profile":"default"}}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_8,
    options: {"id":"UA-144478142-2"}
  },
  {
    run: plugin_gridsome_plugin_modal_10,
    options: {}
  }
]
