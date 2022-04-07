const express = require('express')
const router = express.Router()
const request = require('request')

router.get('/PlayTrack', (req, res) => {
    let trackUri = req.query.trackUri
    console.log(trackUri)

  let authOptions = {
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + global.access_token,
      'Content-Type' : 'application/json',
      'method': 'PUT'
    },
    data:{
      context_uri: trackUri,
      position_ms: 0
    }
  }
  request.get(authOptions, function(error, response, body) {

    console.log(response)
    console.log(body)
    if (!error && response.statusCode === 200) {
      res.status(200).send(JSON.parse(body))
    }
  })
})

module.exports = {router}