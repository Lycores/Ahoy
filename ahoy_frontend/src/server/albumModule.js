const express = require("express");
const router = express.Router();

const axios = require("axios");
router.get("/getSavedAlbum", (req, res) => {
  let token = req.query.token;
  let offset = req.query.offset;
  let limit = req.query.limit;
  let url = `https://api.spotify.com/v1/me/albums?offset=${offset}&limit=${limit}`;
  axios
    .get(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status == 200) {
        res.status(200).send(response.data);
      }
    })
    .catch((error) => {
      console.log("an error happened at /album/getSavedAlbum");
    });
});

router.get("/getAlbum", (req, res) => {
  let token = req.query.token;
  let albumId = req.query.albumId;
  let market = req.query.market;
  let url = `https://api.spotify.com/v1/albums/${albumId}?market=${market}`;

  axios
    .get(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        res.status(200).send(response.data);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = { router };
