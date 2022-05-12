const express = require("express");
const router = express.Router();
const axios = require("axios");
const axiosRetry = require("axios-retry");

axiosRetry(axios);
router.get("/PlayTrack", (req, res) => {
  let token = req.query.token;
  let albumId = req.query.albumId;
  let position = req.query.position;
  let deviceId = req.query.deviceId;
  console.log(albumId, position, deviceId);
  let url = `https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`;
  let data = JSON.stringify({
    context_uri: "spotify:album:" + albumId,
    position_ms: 0,
    offset: {
      position: position,
    },
  });

  axios
    .put(url, data, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json; charset=utf-8",
      },
    })
    .catch((error) => {
      console.log(error);
      console.log("an error happened at /player/PlayTrack");
    });
});

router.get("/getRecentlyPlayed", (req, res) => {
  let token = req.query.token;
  let url = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;

  console.log("getRecentlyPlayed");
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
      console.log("an error happened at /player/getRecentlyPlayed");
    });
});

module.exports = { router };
