const express = require('express')
const request = require('request');
const dotenv = require('dotenv');
const path = require('path');

const whereIsDotEnv = path.join("../", ".env")
dotenv.config({ path: whereIsDotEnv })
const host = process.env.REACT_APP_HOST
const port = process.env.REACT_APP_PORT

global.access_token = ''
const userID = ''
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

const requestUserProfile = () => {
  console.log("requested user profile")
  var authOptions = {
    url: 'https://api.spotify.com/v1/me',
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + access_token,
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




var app = express();

//User request login when clicking the spotify logo
app.get('/auth/login', (req, res) => {

  var scope = "streaming user-read-email user-read-private"
  var state = generateRandomString(16);
  console.log(111)
  console.log(spotify_client_id)
  console.log(spotify_client_secret)
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
app.get('/auth/callback', (req, res) => {
  console.log('auth/callback is called')
  var code = req.query.code;

  var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: spotify_redirect_uri,
      grant_type: 'authorization_code'
    },
    headers: {
      'Authorization': 'Basic ' + (Buffer.from(spotify_client_id + ':' + spotify_client_secret).toString('base64')),
      'Content-Type' : 'application/x-www-form-urlencoded'
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      access_token = body.access_token;
      res.redirect('/home')
    }
  });

})

app.get('/auth/token', (req, res) => {
  res.json({ access_token: access_token})
})



app.get('/getMyPlaylist', (req, res) => {
    requestUserProfile();
  
})











app.listen(port, () => {
  console.log("hello")
  console.log(`Listening at ${host}:${port}`)
})
