module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
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
}
