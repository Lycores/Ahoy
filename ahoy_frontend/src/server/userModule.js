const express = require('express')
const router = express.Router()

router.get('/getUserProfile', (req, res) => {
  let authOptions = {
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + global.access_token,
      'Content-Type' : 'application/json'
    }
  }
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
  }).catch((error)=>console.log(error)) 

})

module.exports = {router}