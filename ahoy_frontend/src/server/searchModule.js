const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/search", (req, res) => {
  let queryString = encodeURI(req.query.query);
  console.log(queryString);
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
          Authorization: "Bearer " + global.access_token,
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      if (response.status == 200) {
        res.status(200).send(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = { router };
