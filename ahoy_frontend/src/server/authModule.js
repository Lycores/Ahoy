const express = require("express")
const dotenv = require('dotenv');
const path = require('path');

const axios = require('axios');
const router = express.Router();
const whereIsDotEnv = path.join("../", ".env")
const qs = require('qs')
dotenv.config({ path: whereIsDotEnv })


const UGC_IMAGE_UPLOAD = 'ugc-image-upload'
const USER_READ_PLAYBACK_STATE = 'user-read-playback-state'
const USER_MODIFY_PLAYBACK_STATE = 'user-modify-playback-state'
const USER_READ_CURRENTLY_PLAYING = 'user-read-currently-playing'
const USER_READ_PRIVATE = 'user-read-private'
const USER_READ_EMAIL = 'user-read-email'
const USER_FOLLOW_MODIFY = 'user-follow-modify'
const USER_FOLLOW_READ = 'user-follow-read'
const USER_LIBRARY_MODIFY = 'user-library-modify'
const USER_LIBRARY_READ = 'user-library-read'
const STREAMING = 'streaming'
const APP_REMOTE_CONTROL = 'app-remote-control'
const USER_READ_PLAYBACK_POSITION = 'user-read-playback-position'
const USER_TOP_READ = 'user-top-read'
const USER_READ_RECENTLY_PLAYED = 'user-read-recently-played'
const PLAYLIST_MODIFY_PRIVATE = 'playlist-modify-private'
const PLAYLIST_READ_COLLABORATIVE = 'playlist-read-collaborative'
const PLAYLIST_READ_PRIVATE = 'playlist-read-private'
const PLAYLIST_MODIFY_PUBLIC = 'playlist-modify-public'

var scope = `${UGC_IMAGE_UPLOAD} ${USER_READ_PLAYBACK_STATE} ${USER_MODIFY_PLAYBACK_STATE} 
${USER_READ_CURRENTLY_PLAYING} ${USER_READ_PRIVATE} ${USER_READ_EMAIL} ${USER_FOLLOW_MODIFY} 
${USER_FOLLOW_READ} ${USER_LIBRARY_MODIFY} ${USER_LIBRARY_READ} ${STREAMING} ${APP_REMOTE_CONTROL} 
${USER_READ_PLAYBACK_POSITION} ${USER_TOP_READ} ${USER_READ_RECENTLY_PLAYED} ${PLAYLIST_MODIFY_PRIVATE} 
${PLAYLIST_READ_COLLABORATIVE} ${PLAYLIST_READ_PRIVATE} ${PLAYLIST_MODIFY_PUBLIC}`

var spotify_client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID
var spotify_client_secret = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
var spotify_redirect_uri = process.env.REACT_APP_SPOTIFY_REDIRECT_URI



const generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

//User request login when clicking the spotify logo
router.get('/login', (req, res) => {
    var state = generateRandomString(16);
    var auth_query_parameters = new URLSearchParams({
      response_type: "code",
      client_id: spotify_client_id,
      scope: scope,
      redirect_uri: spotify_redirect_uri,
      state: state
    })
  
    res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
  })

/** after user grant access the information, spotify redirect to [spotify_redirect_uri],
 * and it was proxyed and sent backed to server side. Server prepare to aquire an
 * access token after */  
router.get('/callback', (req, res) => {
    var code = req.query.code;
    var data =  qs.stringify({
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    }) 
    var url = 'https://accounts.spotify.com/api/token'
    axios.post(url, data, {
      headers: {
        'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
        'Content-Type' : 'application/x-www-form-urlencoded'
      }
    }).then((response)=>{
      if (response.status === 200) {
          global.access_token = response.data.access_token;
          res.redirect('/home')
        }
    }).catch((error)=>console.log(error)) 
  
  })

router.get('/token', (req, res) => {
    res.json({ access_token: global.access_token})
})

module.exports = {router}