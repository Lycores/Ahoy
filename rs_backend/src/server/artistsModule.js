const express = require("express");
const router = express.Router();
const axios = require("axios");
const axiosRetry = require("axios-retry");

axiosRetry(axios, { retries: 5 });
router.get("/getFollowedArtists", (req, res) => {
  let token = req.query.token;
  let limit = req.query.limit;
  let after = req.query.after;
  let url = "";
  if (after) {
    url = `https://api.spotify.com/v1/me/following?type=artist&limit=${limit}&after=${after}`;
  } else {
    url = `https://api.spotify.com/v1/me/following?type=artist&limit=${limit}`;
  }
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
        res.send(response.data);
      }
    })
    .catch((error) => {
      console.log("an error happened at /artists/getFollowedArtists");
    });
});

router.get("/getArtistTopTrack", (req, res) => {
  let token = req.query.token;
  let artistId = req.query.artistId;
  let market = req.query.market;
  let url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=${market}`;

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
        res.send(response.data);
      }
    })
    .catch((error) => {
      console.log("an error happened at /artists/getArtistTopTrack");
    });
});

router.get("/getArtistAlbums", (req, res) => {
  let token = req.query.token;
  let artistId = req.query.artistId;
  let market = req.query.market;
  let limit = req.query.limit;
  let offset = req.query.offset;
  let url = `https://api.spotify.com/v1/artists/${artistId}/albums?limit=${limit}&offset=${offset}&market=${market}`;

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
        res.send(response.data);
      }
    })
    .catch((error) => {
      console.log("an error happened at /artists/getArtistAlbums");
    });
});

module.exports = { router };
