// Uncommit it if it is regular server, if it is deploy by netlify, you should commit it

// const { createProxyMiddleware } = require("http-proxy-middleware");
// const dotenv = require("dotenv");
// const path = require("path");
// // const whereIsDotEnv = path.join("./", ".env");
// dotenv.config();
// const proxyPort = process.env.REACT_APP_PROXY_PORT;

// module.exports = function (app) {
//   app.use(
//     "/auth/**",
//     createProxyMiddleware({
//       target: `http://localhost:` + proxyPort,
//     })
//   ),
//     app.use(
//       "/traditional/auth/**",
//       createProxyMiddleware({
//         target: `http://localhost:` + proxyPort,
//       })
//     ),
//     app.use(
//       "/user/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/traditional/user/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/album/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/traditional/album/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/player/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/traditional/player/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/artists/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/traditional/artists/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/playlist/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/traditional/playlist/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/search/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     ),
//     app.use(
//       "/traditional/search/**",
//       createProxyMiddleware({
//         target: `http://localhost:${proxyPort}`,
//       })
//     );
// };
