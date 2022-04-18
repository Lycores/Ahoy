const express = require('express')
const router = express.Router()

const axios = require('axios')
router.get('/getMyPlaylists', (req, res) => {
    let url = 'https://api.spotify.com/v1/me/playlists?limit=40'
    axios.get(url, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + global.access_token,
            'Content-Type' : 'application/json'
        }
      }).then((response)=>{
        if (response.status == 200) {
            res.status(200).send(response.data)
          }
      }).catch((error)=>{
        console.log("an error happened at /playlist/getMyPlaylists")})

})




module.exports = {router}