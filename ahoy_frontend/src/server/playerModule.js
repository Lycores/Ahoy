const express = require('express')
const router = express.Router()

const qs = require('qs')
const { default: axios } = require('axios')

router.get('/PlayTrack', (req, res) => {
    let albumId = req.query.albumId
    let position = req.query.position
    let deviceId = req.query.deviceId

    let url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`
    let data = JSON.stringify({
      context_uri: "spotify:album:" + albumId,
      position_ms: 0,
      offset: {
        position: position
      },
    })

    axios.put(url, data ,{
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + global.access_token,
        'Content-Type' : 'application/json; charset=utf-8',
      }
    }).catch((error)=>{
      console.log("an error happened at /player/PlayTrack")})
})

module.exports = {router}