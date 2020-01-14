import plugin_gridsome_plugin_tailwindcss_5 from "/home/darryl/Projects/ss-gridsome/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_plugin_netlify_cms_7 from "/home/darryl/Projects/ss-gridsome/node_modules/gridsome-plugin-netlify-cms/gridsome.client.js"
import plugin_gridsome_plugin_flexsearch_8 from "/home/darryl/Projects/ss-gridsome/node_modules/gridsome-plugin-flexsearch/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"tailwindConfig":"","purgeConfig":{"keyframes":true,"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.ts","./src/**/*.tsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"whitelistPatterns":[{},{},{}]},"presetEnvConfig":{"stage":0,"autoprefixer":false},"shouldPurge":false,"shouldImport":true,"shouldTimeTravel":true,"shouldPurgeUnusedKeyframes":true}
  },
  {
    run: plugin_gridsome_plugin_netlify_cms_7,
    options: {"publicPath":"/admin","plugins":["netlify-cms-widget-youtube"],"htmlTitle":"Content Editor","configPath":"src/admin/config.yml","modulePath":"/home/darryl/Projects/ss-gridsome/node_modules/gridsome-plugin-netlify-cms/lib/cms.js","htmlPath":"/home/darryl/Projects/ss-gridsome/node_modules/gridsome-plugin-netlify-cms/templates/index.html","injectScript":true,"enableIdentityWidget":true,"debug":false}
  },
  {
    run: plugin_gridsome_plugin_flexsearch_8,
    options: {"collections":[{"typeName":"Guns","indexName":"Guns","fields":["title","variant","condition","slug","images","price","mechanism","id","description"]}],"searchFields":["title","variant","mechanism","id","description"],"flexsearch":{"profile":"default"}}
  }
]
