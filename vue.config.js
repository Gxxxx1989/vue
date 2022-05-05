/**
 * 项目配置文件
 */

module.exports = {
    //根路径
    publicPath: '/',
    //生产路径
    outputDir: 'dist',
    devServer: {
        port: 8765,
        // proxy: 'http://localhost:8080'
    },
    pages: {
        index: {
            // page 的入口
            entry: './src/main.js',
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            //标题
            title: '首页',
            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
            console.log("config--->",config)

        }
    }

}
