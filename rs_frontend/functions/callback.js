const dotenv = require("dotenv");
const path = require("path");
const axios = require("axios");
const whereIsDotEnv = path.join("../", ".env");
const axiosRetry = require("axios-retry");
const qs = require("qs");
dotenv.config({ path: whereIsDotEnv });
axiosRetry(axios, { retries: 5 });
var spotify_client_id = "5d1b7a0e26c34454af2075cd530f3ea4";
var spotify_client_secret = "db982d97eaee4b1892ce88d1614b3b73";
var spotify_redirect_uri =
  "https://responsive-spotify.netlify.app/auth/callback";
exports.handler = async function (event, context) {
  var code = event.queryStringParameters.code;
  var data = qs.stringify({
    code: code,
    redirect_uri: spotify_redirect_uri,
    grant_type: "authorization_code",
  });
  var url = "https://accounts.spotify.com/api/token";

  return axios
    .post(url, data, {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(spotify_client_id + ":" + spotify_client_secret).toString(
            "base64"
          ),
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((response) => {
      console.log("---------------------");
      console.log(response.status);
      if (response.status === 200) {
        return {
          statusCode: 302,
          headers: {
            Location: `/authenticated?token=${response.data.access_token}`,
          },
        };
      }
    })
    .catch((error) => {
      console.log(error);
      return {
        statusCode: error.status,
        body: JSON.stringify({
          error: `the error happened`,
        }),
      };
    });
};
