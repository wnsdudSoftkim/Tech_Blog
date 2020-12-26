const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware('/User',{
            target:'http://localhost:8000',
            changeOrigin:true
        })
    )
    app.use(
        createProxyMiddleware('/Post',{
            target:'http://localhost:8000',
            changeOrigin:true
        })
    )
   
}