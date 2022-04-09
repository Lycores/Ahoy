const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth/**',
    createProxyMiddleware({
      target: 'http://localhost:4000',
    })
  ),
  app.use(
    '/user/**',
    createProxyMiddleware({
      target: 'http://localhost:4000',
    })
  ),
  app.use(
    '/album/**',
    createProxyMiddleware({
      target: 'http://localhost:4000',
    })
  ),
  app.use(
    '/player/**',
    createProxyMiddleware({
      target: 'http://localhost:4000',
    })
  ),
  app.use(
    '/artists/**',
    createProxyMiddleware({
      target: 'http://localhost:4000',
    })
  )
};