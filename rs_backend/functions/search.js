const axios = require("axios");
const axiosRetry = require("axios-retry");
axiosRetry(axios, { retries: 5 });

exports.handler = async function (event, context) {
  let token = event.queryStringParameters.token;
  let queryString = encodeURI(event.queryStringParameters.query);
  let type = event.queryStringParameters.type;
  let limit = event.queryStringParameters.limit;
  let offset = event.queryStringParameters.offset;
  let market = event.queryStringParameters.market;

  return axios
    .get(
      `https://api.spotify.com/v1/search?q=${queryString}&type=${type}&limit=${limit}&offset=${offset}&market=${market}`,
      {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status === 200) {
        return {
          statusCode: 200,
          body: JSON.stringify(response.data),
        };
      }
    })
    .catch((error) => {
      return {
        statusCode: error.status,
        body: JSON.stringify({
          error: `the error happened`,
        }),
      };
    });
};
