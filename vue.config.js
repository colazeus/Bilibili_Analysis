const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  devServer: {
    proxy: {
      '/devapi': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        pathRewrite: {
          '^/devapi': ''
        }
      },
      '/proapi':{
        target: 'http://api.bilibilianalysis.com',
        changeOrigin: true,
        pathRewrite: {
          '^/proapi': ''
        }
      }
    }
  },
  publicPath: "./",
  //输出目录
  assetsDir: "static",
  indexPath: "index.html",
  runtimeCompiler: true,
  productionSourceMap: false,

  configureWebpack: config => {
    config.plugins.push(new CompressionWebpackPlugin({
      algorithm: 'gzip',
      test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
      threshold: 10240,
      minRatio: 0.8
    }));
    config.externals = {
        'vue' : 'Vue',
        'vue-router': 'VueRouter',
    }
  }
}
