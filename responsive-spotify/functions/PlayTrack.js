const axios = require("axios");
const axiosRetry = require("axios-retry");
axiosRetry(axios, { retries: 5 });

exports.handler = async function (event, context) {
  let token = event.queryStringParameters.token;
  let albumId = event.queryStringParameters.albumId;
  let position = event.queryStringParameters.position;
  let deviceId = event.queryStringParameters.deviceId;
  let url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`;
  let data = JSON.stringify({
    context_uri: "spotify:album:" + albumId,
    position_ms: 0,
    offset: {
      position: position,
    },
  });

  return axios
    .put(url, data, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .then(() => {
      return {
        statusCode: 200,
      };
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
