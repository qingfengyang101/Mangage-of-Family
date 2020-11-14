'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path');

/**
 *  author: xuyinghao
 *  use baseUrl to api and proxyTable for server
 *  we can use baseUrl to  change ask server, so we use virese baseUrl golbal 
 */
let baseUrl = "http://121.89.209.125:8080";
// baseUrl = 'http://112.125.27.35:8080';
module.exports = {
  /**
   *  build is npm init build for go to line 
   *  for production
   */
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: false,
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    bundleAnalyzerReport: process.env.npm_config_report
    
  },
  /**
   *  this seting config 
   * 
   */
  dev: {
    env: require("./dev.env"),

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    /**
     * proxyTable for server request orider
     * web and server middleware to go
     */
    proxyTable: {
      '/manage': {
        target: baseUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/manage': ''
        },
        logLevel: false
      },
      '/auth': {
        target: baseUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/auth': '/auth'
        }
      },
      '/admin': {
        target: baseUrl,
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/admin': '/admin'
        }
      }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8008, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

}
