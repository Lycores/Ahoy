const dotenv = require("dotenv");
const path = require("path");
const axios = require("axios");
const whereIsDotEnv = path.join("../", ".env");
const axiosRetry = require("axios-retry");

dotenv.config({ path: whereIsDotEnv });
axiosRetry(axios, { retries: 5 });
const UGC_IMAGE_UPLOAD = "ugc-image-upload";
const USER_READ_PLAYBACK_STATE = "user-read-playback-state";
const USER_MODIFY_PLAYBACK_STATE = "user-modify-playback-state";
const USER_READ_CURRENTLY_PLAYING = "user-read-currently-playing";
const USER_READ_PRIVATE = "user-read-private";
const USER_READ_EMAIL = "user-read-email";
const USER_FOLLOW_MODIFY = "user-follow-modify";
const USER_FOLLOW_READ = "user-follow-read";
const USER_LIBRARY_MODIFY = "user-library-modify";
const USER_LIBRARY_READ = "user-library-read";
const STREAMING = "streaming";
const APP_REMOTE_CONTROL = "app-remote-control";
const USER_READ_PLAYBACK_POSITION = "user-read-playback-position";
const USER_TOP_READ = "user-top-read";
const USER_READ_RECENTLY_PLAYED = "user-read-recently-played";
const PLAYLIST_MODIFY_PRIVATE = "playlist-modify-private";
const PLAYLIST_READ_COLLABORATIVE = "playlist-read-collaborative";
const PLAYLIST_READ_PRIVATE = "playlist-read-private";
const PLAYLIST_MODIFY_PUBLIC = "playlist-modify-public";

var scope = `${UGC_IMAGE_UPLOAD} ${USER_READ_PLAYBACK_STATE} ${USER_MODIFY_PLAYBACK_STATE} 
${USER_READ_CURRENTLY_PLAYING} ${USER_READ_PRIVATE} ${USER_READ_EMAIL} ${USER_FOLLOW_MODIFY} 
${USER_FOLLOW_READ} ${USER_LIBRARY_MODIFY} ${USER_LIBRARY_READ} ${STREAMING} ${APP_REMOTE_CONTROL} 
${USER_READ_PLAYBACK_POSITION} ${USER_TOP_READ} ${USER_READ_RECENTLY_PLAYED} ${PLAYLIST_MODIFY_PRIVATE} 
${PLAYLIST_READ_COLLABORATIVE} ${PLAYLIST_READ_PRIVATE} ${PLAYLIST_MODIFY_PUBLIC}`;

var spotify_client_id = "5d1b7a0e26c34454af2075cd530f3ea4";
var spotify_client_secret = "db982d97eaee4b1892ce88d1614b3b73";
var spotify_redirect_uri =
  "https://responsive-spotify.netlify.app/auth/callback";
console.log("+++++++++++++++++++++++++++++++");
console.log(spotify_redirect_uri);
const generateRandomString = function (length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

exports.handler = async function (event, context) {
  var state = generateRandomString(16);
  var auth_query_parameters = new URLSearchParams({
    response_type: "code",
    client_id: spotify_client_id,
    scope: scope,
    redirect_uri: spotify_redirect_uri,
    state: state,
  });
  return {
    statusCode: 302,
    headers: {
      Location:
        "https://accounts.spotify.com/authorize/?" +
        auth_query_parameters.toString(),
    },
  };
};
