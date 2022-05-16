const axios = require("axios");
const axiosRetry = require("axios-retry");
axiosRetry(axios, { retries: 5 });

exports.handler = async function (event, context) {
  let token = event.queryStringParameters.token;
  let albumId = event.queryStringParameters.albumId;
  let market = event.queryStringParameters.market;
  let url = `https://api.spotify.com/v1/albums/${albumId}?market=${market}`;
  return axios
    .get(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        return {
          statusCode: 200,
          body: JSON.stringify(response.data),
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
