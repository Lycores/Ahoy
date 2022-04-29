import { useEffect, useState, useRef } from "react";
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
    if (hasMorePlaylist.current) {
      fetch(
        `/playlist/getMyPlaylists?offset=${offset.current}&limit=${limit.current}`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          offset.current += limit.current;
          if (offset.current < json.total) {
            hasMorePlaylist.current = true;
          } else {
            hasMorePlaylist.current = false;
          }
          setPlaylistListState((prevPlaylist) => {
            return [...prevPlaylist, ...json.items];
          });
        });
    }
  };

  let [playlistListState, setPlaylistListState] = useState(playlistList);
  let hasMorePlaylist = useRef(true);
  let limit = useRef(10);
  let offset = useRef(0);

  useEffect(() => {
    if (!playlist) {
      getMyPlaylist();
    }
  }, [token]);

  return [playlist, playlistListState, getMyPlaylist];
};
export default usePlaylistPage;
