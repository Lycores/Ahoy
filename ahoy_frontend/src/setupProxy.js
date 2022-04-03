const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/user/getUserProfile',
    createProxyMiddleware({
      target: 'http://localhost:4000',
    })
  ),
  app.use(
    '/auth/**',
    createProxyMiddleware({
      target: 'http://localhost:4000',
    })
  )

  
};