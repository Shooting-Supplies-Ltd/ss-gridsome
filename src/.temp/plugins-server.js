import plugin_gridsome_plugin_tailwindcss_5 from "/home/darryl/Projects/ss-gridsome-mobile/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_6 from "/home/darryl/Projects/ss-gridsome-mobile/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"","purgeConfig":{"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"]},"presetEnvConfig":{"stage":0,"autoprefixer":false},"shouldPurge":false,"shouldImport":true,"shouldTimeTravel":true,"shouldPurgeUnusedKeyframes":true}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_6,
    options: {"collections":[{"typeName":"Guns","indexName":"Guns","fields":["title","variant","condition","slug","images","price"]}],"searchFields":["title","variant"],"flexsearch":{"profile":"default"}}
  }
]
