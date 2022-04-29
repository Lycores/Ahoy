import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
const useArtistsPage = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  let artist = null;
  let { state } = useLocation();
  if (state) {
    artist = state.artist;
  }

  const recordLastArtist = (json) => {
    lastArtistIdInPrevReq.current =
      json.artists.items[json.artists.items.length - 1].id;
  };
  const getFollowedArtists = () => {
    if (hasMoreArtist.current) {
      let url = "";
      if (lastArtistIdInPrevReq.current) {
        url = `artists/getFollowedArtists?limit=${limit.current}&after=${lastArtistIdInPrevReq.current}`;
      } else {
        url = `artists/getFollowedArtists?limit=${limit.current}`;
      }
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          offset.current += limit.current;
          if (offset.current < json.artists.total) {
            hasMoreArtist.current = true;
          } else {
            hasMoreArtist.current = false;
          }
          recordLastArtist(json);
          setArtistsListState((prevArtistList) => {
            return [...prevArtistList, ...json.artists.items];
          });
        });
    }
  };

  let [artistsListState, setArtistsListState] = useState([]);
  let hasMoreArtist = useRef(true);
  let limit = useRef(10);
  let offset = useRef(0);
  let lastArtistIdInPrevReq = useRef(null);
  useEffect(() => {
    if (!artist) {
      getFollowedArtists();
    }
  }, [token]);

  return [artist, artistsListState, getFollowedArtists];
};

export default useArtistsPage;
