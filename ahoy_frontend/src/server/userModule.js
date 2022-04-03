const express = require('express')
const router = express.Router()
const request = require('request')

const requestUserProfile = () => {
    console.log("requested user profile")
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

router.get('/getUserProfile', (req, res) => {
    requestUserProfile();
  
})

module.exports = {router}