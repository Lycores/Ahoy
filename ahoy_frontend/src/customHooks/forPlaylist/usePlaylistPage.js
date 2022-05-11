import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";

const usePlaylistPage = () => {
  let token = sessionStorage.getItem("token");

  let playlist = null;
  let playlistList = [];
  let { state } = useLocation();
  if (state) {
    playlist = state.playlist;
  }
  let [playlistListState, setPlaylistListState] = useState(playlistList);
  let hasMorePlaylist = useRef(true);
  let limit = useRef(10);
  let offset = useRef(0);

  const getMyPlaylist = useCallback(() => {
    if (hasMorePlaylist.current) {
      fetch(
        `/playlist/getMyPlaylists?offset=${offset.current}&limit=${limit.current}&token=${token}`
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
  }, [hasMorePlaylist, offset, token]);

  useEffect(() => {
    if (!playlist) {
      getMyPlaylist();
    }
  }, [token]);

  return [playlist, playlistListState, getMyPlaylist];
};
export default usePlaylistPage;
