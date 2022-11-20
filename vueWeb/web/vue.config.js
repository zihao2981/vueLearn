const { defineConfig } = require('@vue/cli-service')
module.exports = {
  publicPath:  './',
  //outputDir: 'kuaChengTongBan', // 更改打包路径，项目默认的路径是dist  
  // 请求代理 
  devServer: {
      proxy: {   
        //广州市海珠区
      '/yinpian': {//'/ApprItemInterface'是接口部署的包名
        target: 'http://localhost:8088',//'http://10.110.65.79:8088',//该包名部署的端口
        changeOrigin: true
      }, 
      }
  },
  // 生产环境下的sourceMap
  productionSourceMap: true,
  chainWebpack: config => {
      if (process.env.NODE_ENV === 'production') {
          // 为生产环境修改配置...
          config
              .externals({
                  'vue': 'Vue',
                  'vue-router': 'VueRouter'
              })
      } else {
          // 为开发环境修改配置...
      }
  },
  lintOnSave: false, // eslint-loader 是否在保存的时候检查
}
