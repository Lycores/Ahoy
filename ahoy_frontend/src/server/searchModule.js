const express = require("express");
const router = express.Router();
const axios = require("axios");
const axiosRetry = require("axios-retry");

axiosRetry(axios, { retries: 5 });
router.get("/search", (req, res) => {
  let token = req.query.token;
  let queryString = encodeURI(req.query.query);
  let type = req.query.type;
  let limit = req.query.limit;
  let offset = req.query.offset;
  let market = req.query.market;

  axios
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
        res.status(200).send(response.data);
      }
    })
    .catch((error) => {
      console.log("an error happened at /search/search");
    });
});

module.exports = { router };
