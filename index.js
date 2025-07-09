// server.js
const { startKeepAliveServer } = require("render-killer");

startKeepAliveServer({
    targetUrl: "https://blog-6zny.onrender.com", // URL to ping every 14 min
    port: process.env.PORT || 10000
});
