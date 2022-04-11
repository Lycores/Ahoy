const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/getUserProfile', (req, res) => {
  let url = 'https://api.spotify.com/v1/me'
    axios.get(url, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + global.access_token,
            'Content-Type' : 'application/json'
        }
      }).then((response)=>{
        if (response.status === 200) {
            res.send(response.data)
          }
      }).catch((error)=>{
        console.log("an error happened at  /user/getUserProfile")})
})

router.get('/getUserCreatedPlaylist', (req, res) => {
  let userId = req.query.userId

  let url = `https://api.spotify.com/v1/users/${userId}/playlists`
  axios.get(url, {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + global.access_token,
      'Content-Type' : 'application/json'
    }
  }).then((response)=>{
    if (response.status === 200) {
        console.log(response)
    }
  }).catch((error)=>{
    console.log('an error happened at  /user/getUserCreatedPlaylist')}) 

})

module.exports = {router}