const express = require('express')
const request = require('request');
const dotenv = require('dotenv');
const path = require('path');
const authModule = require('./authModule.js')
const userModule = require('./userModule.js')
const albumModule = require('./albumModule.js')
const whereIsDotEnv = path.join("../", ".env")
dotenv.config({ path: whereIsDotEnv })
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_PORT

const userID = ''
global.access_token = ''

var app = express()

app.use("/auth", authModule.router)
app.use("/user", userModule.router)
app.use("/album", albumModule.router)

app.listen(port, () => {
  console.log("hello")
  console.log(`Listening at ${host}:${port}`)
})