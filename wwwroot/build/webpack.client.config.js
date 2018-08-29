const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const HTMLPlugin = require('html-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = merge(base, {
  resolve: {
    alias: {
      'axios-client': './axios-client.js'
    }
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: './favicon.ico',
      to: './dist/favicon.ico'
    }]),
    new VueSSRClientPlugin(),
    // strip dev-only code in Vue source
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // generate output HTML
    new HTMLPlugin({
      template: 'src/index.template.html'
    })
  ]
})

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    // auto generate service worker
    new SWPrecachePlugin({
      cacheId: 'vue-hn',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/]
    })
  )
}

module.exports = config
