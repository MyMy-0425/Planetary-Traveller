const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave:false,
    publicPath:'./',
    devServer:{
        proxy:'http://yeyeye.cc:5002'  //http://yeyeye.cc:5002  http://127.0.0.1:5005
    }
})
