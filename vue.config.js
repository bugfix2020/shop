module.exports = {
    publicPath: '/',
    outputDir:'dist',
    devServer: {
        open: true,
        // host: '*',
        // port: '*',
        proxy: {
            '/api': {
                target: 'http://pdd.698zq.com/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}