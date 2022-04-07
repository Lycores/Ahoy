const express = require('express')
const router = express.Router()
const request = require('request')
const qs = require('qs')
const { default: axios } = require('axios')

router.get('/PlayTrack', (req, res) => {
    let trackUri = req.query.trackUri
    console.log(trackUri)

    let url = 'https://api.spotify.com/v1/me/player/play'
    let data = JSON.stringify({
      context_uri: trackUri,
      position_ms: 0,
      offset: {
        position: 0
      },
    })

    axios.put(url, data ,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + global.access_token,
        'Content-Type' : 'application/json; charset=utf-8',
      }
    }).then((response)=> {
      console.log(response)
    }).catch((error)=>{console.log(error)})
})

module.exports = {router}