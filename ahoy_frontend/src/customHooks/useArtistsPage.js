import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const useArtistsPage = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  let artistsList = [];
  let artist = null;
  let { state } = useLocation();
  if (state) {
    artist = state.artist;
  }

  const getFollowedArtists = () => {
    fetch("artists/getFollowedArtists")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setArtistsListState(json.artists.items);
      });
  };
  let [artistsListState, setArtistsListState] = useState(artistsList);
  useEffect(() => {
    if (!artist) {
      getFollowedArtists();
    }
  }, [token]);

  return [artist, artistsListState];
};

export default useArtistsPage;
