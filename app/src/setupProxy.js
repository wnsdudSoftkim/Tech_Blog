const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/User',{
            target:'https://myblogtest.herokuapp.com',
            changeOrigin:true
        })
    )
    app.use(
        createProxyMiddleware('/Post',{
            target:'https://myblogtest.herokuapp.com',
            changeOrigin:true
        })
    )
    app.use(
        createProxyMiddleware('/Comment',{
            target:'https://myblogtest.herokuapp.com',
            changeOrigin:true
        })
    )
   
}