// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-Za-z0-9-_:\/]+/g) || []
  }
}

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
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('normal')
      .use('postcss-loader')
      .tap(options => {
        options.plugins.unshift(...[
          require('postcss-import'),
          require('postcss-nested'),
          require('tailwindcss'),
        ])

        if (process.env.NODE_ENV === 'production') {
          options.plugins.push(...[
            require('@fullhuman/postcss-purgecss')({
              content: [
                'src/assets/**/*.css',
                'src/**/*.vue',
                'src/**/*.js'
              ],
              extractors: [
                {
                  extractor: TailwindExtractor,
                  extensions: ['css', 'vue', 'js']
                }
              ],
              whitelist: ['svg-inline--fa'],
              whitelistPatterns: [/shiki/, /fa-$/]
            })
          ])
        }
        return options
      })
  }

}

  
 

