const express = require('express')
const router = express.Router()
const request = require('request')

router.get('/getUserProfile', (req, res) => {
  let authOptions = {
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + global.access_token,
      'Content-Type' : 'application/json'
    }
  }
  request.get(authOptions, function(error, response, body) {
    console.log(JSON.parse(body))
    
    if (!error && response.statusCode === 200) {
      res.status(200).send(JSON.parse(body))
    }
  })
})

router.get('/getUserCreatedPlaylist', (req, res) => {
  let userId = req.query.userId
  let authOptions = {
    url: `https://api.spotify.com/v1/users/${userId}/playlists`,
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + global.access_token,
      'Content-Type' : 'application/json'
    }
  }
  request.get(authOptions, function(error, response, body) {
    console.log(JSON.parse(body))
    
    if (!error && response.statusCode === 200) {
      res.status(200).send(JSON.parse(body))
    }
  })

})

module.exports = {router}