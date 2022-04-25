const express = require("express");
const router = express.Router();

const axios = require("axios");
router.get("/getSavedAlbum", (req, res) => {
  let url = "https://api.spotify.com/v1/me/albums";
  axios
    .get(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + global.access_token,
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
  let albumId = req.query.albumId;
  let market = req.query.market;
  let url = `https://api.spotify.com/v1/albums/${albumId}?market=${market}`;

  axios
    .get(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + global.access_token,
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

router.get("/getSeveralAlbums", (req, res) => {
  let albumIds = req.query.albumIds;
  let market = req.query.market;
  let url = `https://api.spotify.com/v1/albums?ids=${albumIds}&market=${market}`;

  axios
    .get(url, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + global.access_token,
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
