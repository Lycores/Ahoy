const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const authModule = require("./authModule.js");
const userModule = require("./userModule.js");
const albumModule = require("./albumModule.js");
const playerModule = require("./playerModule.js");
const artistsModule = require("./artistsModule.js");
const playlistModule = require("./playlistModule.js");
const searchModule = require("./searchModule.js");
const whereIsDotEnv = path.join("../", ".env");
dotenv.config({ path: whereIsDotEnv });
const host = process.env.HOST;
const port = process.env.PORT;

var app = express();

app.use("/auth", authModule.router);
app.use("/user", userModule.router);
app.use("/traditional/album", albumModule.router);
app.use("/album", albumModule.router);
app.use("/player", playerModule.router);
app.use("/traditional/artists", artistsModule.router);
app.use("/artists", artistsModule.router);
app.use("/playlist", playlistModule.router);
app.use("/traditional/playlist", playlistModule.router);
app.use("/search", searchModule.router);
app.use("/traditional/search", searchModule.router);

app.listen(port, () => {
  console.log(`Listening at ${host}:${port}`);
});
