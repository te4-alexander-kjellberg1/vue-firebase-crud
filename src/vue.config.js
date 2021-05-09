module.exports = {
  devServer: {
    proxy: 'http://localhost:8080',
    hot: true,
    disableHostCheck: true,
    https: false
  }
}