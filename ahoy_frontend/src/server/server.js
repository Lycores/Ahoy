const express = require('express')
const request = require('request');
const dotenv = require('dotenv');
const path = require('path');
const authModule = require('./authModule.js')

const whereIsDotEnv = path.join("../", ".env")
dotenv.config({ path: whereIsDotEnv })
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_PORT

const userID = ''
global.access_token = ''

const requestUserProfile = () => {
  console.log("requested user profile")
  console.log(authModule)
  var authOptions = {
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + global.access_token,
      'Content-Type' : 'application/json'
    }
  }
  request.get(authOptions, function(error, response, body) {
    console.log("user profile got")
    console.log(error)
    console.log(body)
    console.log(response.statusCode)
    if (!error && response.statusCode === 200) {

    }
  });

}

var app = express()

app.use("/auth", authModule.router)


app.get('/user/getUserProfile', (req, res) => {
    requestUserProfile();
  
})


app.listen(port, () => {
  console.log("hello")
  console.log(`Listening at ${host}:${port}`)
})
