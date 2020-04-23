import plugin_gridsome_plugin_tailwindcss_5 from "/Users/work/Projects/shooting-supplies/ss-gridsome/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_7 from "/Users/work/Projects/shooting-supplies/ss-gridsome/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"
import plugin_gridsome_plugin_google_analytics_8 from "/Users/work/Projects/shooting-supplies/ss-gridsome/node_modules/@gridsome/plugin-google-analytics/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"","purgeConfig":{"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"]},"presetEnvConfig":{"stage":0,"autoprefixer":false},"shouldPurge":false,"shouldImport":true,"shouldTimeTravel":true,"shouldPurgeUnusedKeyframes":true}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_7,
    options: {"collections":[{"typeName":"Guns","indexName":"Guns","fields":["title","slug","images","price","mechanism","id","variant","condition","calibre"]}],"searchFields":["title","mechanism","calibre"],"flexsearch":{"profile":"default"}}
  },
  {
    run: plugin_gridsome_plugin_google_analytics_8,
    options: {"id":"UA-144478142-2"}
  }
]
