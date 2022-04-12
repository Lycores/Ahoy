const express = require('express')
const dotenv = require('dotenv');
const path = require('path');
const authModule = require('./authModule.js')
const userModule = require('./userModule.js')
const albumModule = require('./albumModule.js')
const playerModule = require('./playerModule.js')
const artistsModule = require('./artistsModule.js')
const whereIsDotEnv = path.join("../", ".env")
dotenv.config({ path: whereIsDotEnv })
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_PORT

global.access_token = ''

var app = express()

app.use("/auth", authModule.router)
app.use("/user", userModule.router)
app.use("/traditional/album", albumModule.router)
app.use("/player", playerModule.router)
app.use("/artists", artistsModule.router)

app.listen(port, () => {
  console.log("hello")
  console.log(`Listening at ${host}:${port}`)
})
