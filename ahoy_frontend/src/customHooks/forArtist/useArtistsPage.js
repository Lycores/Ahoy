import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
const useArtistsPage = () => {
  let token = sessionStorage.getItem("token");

  let artist = null;
  let { state } = useLocation();
  if (state) {
    artist = state.artist;
  }

  let [artistsListState, setArtistsListState] = useState([]);
  let hasMoreArtist = useRef(true);
  let limit = useRef(10);
  let offset = useRef(0);
  let lastArtistIdInPrevReq = useRef(null);

  const recordLastArtist = useCallback(
    (json) => {
      lastArtistIdInPrevReq.current =
        json.artists.items[json.artists.items.length - 1].id;
    },
    [lastArtistIdInPrevReq]
  );
  const getFollowedArtists = useCallback(() => {
    if (hasMoreArtist.current) {
      let url = "";
      if (lastArtistIdInPrevReq.current) {
        url = `artists/getFollowedArtists?limit=${limit.current}&after=${lastArtistIdInPrevReq.current}&token=${token}`;
      } else {
        url = `artists/getFollowedArtists?limit=${limit.current}&token=${token}`;
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
  }, [hasMoreArtist, lastArtistIdInPrevReq, offset, token]);

  useEffect(() => {
    if (!artist) {
      getFollowedArtists();
    }
  }, [token]);

  return [artist, artistsListState, getFollowedArtists];
};

export default useArtistsPage;
