const path = require('path')
function resolve(dir) {
  return path.join(__dirname,dir)
}

module.exports={
  chainWebpack:(config)=>{
    config.resolve.alias
      //set第一个参数：设置的别名，第二个参数：设置的路径
      .set('@',resolve('./src'))//根据目录的层级来决定，也可以自行设
      .set('components',resolve('./src/components'))
      .set('common',resolve('./src/common'))
      .set('network',resolve('./src/network'))
      .set('store',resolve('./src/store'))
      .set('views',resolve('./src/views'))
      .set('assets',resolve('./src/assets'))
  }
}
