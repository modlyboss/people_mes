module.exports = {
  publicPath: "./",
  //productionSourceMap: false, //减少包大小，也可以加密源码
  devServer: {
    host:'127.0.0.1',
    port: 8888
    //proxy: {} //等后端写了 弄再弄端口代理
  }
};
