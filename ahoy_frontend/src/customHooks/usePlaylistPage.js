import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const usePlaylistPage = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  let playlist = null;
  let playlistList = [];
  let { state } = useLocation();
  if (state) {
    playlist = state.playlist;
  }

  const getMyPlaylist = () => {
    fetch("/playlist/getMyPlaylists")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPlaylistListState(json.items);
      });
  };

  let [playlistListState, setPlaylistListState] = useState(playlistList);

  useEffect(() => {
    if (!playlist) {
      getMyPlaylist();
    }
  }, [token]);

  return [playlist, playlistListState];
};
export default usePlaylistPage;
