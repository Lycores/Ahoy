const express = require('express')
const router = express.Router()
const axios = require('axios')
router.get('/getFollowedArtists', (req, res) => {
    let url = 'https://api.spotify.com/v1/me/following?type=artist&limit=40'
    
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
      }).catch((error)=>{console.log(error)})
})

router.get('/getArtistTopTrack', (req, res) => {
    let artistId = req.query.artistId
    let market = req.query.market
    console.log(111)
    console.log(artistId)
    let url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=${market}`
    
    axios.get(url, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + global.access_token,
            'Content-Type' : 'application/json'
        }
      }).then((response)=>{
        //   console.log(response)
        if (response.status === 200) {
            res.send(response.data)
          }
      }).catch((error)=>{console.log(error)})
})

router.get('/getArtistAlbums', (req, res) => {
    let artistId = req.query.artistId
    let market = req.query.market
    let url = `https://api.spotify.com/v1/artists/${artistId}/albums?limit=40&market=${market}`
    
    axios.get(url, {
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + global.access_token,
            'Content-Type' : 'application/json'
        }
      }).then((response)=>{
          console.log(response)
        if (response.status === 200) {
          res.send(response.data) 
        }
      }).catch((error)=>{console.log(error)})
})



module.exports = {router}