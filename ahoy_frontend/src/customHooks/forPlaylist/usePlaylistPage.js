import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PlaceholderCardComp from "../../components/placeholderComp/PlaceholderCardComp";
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
  let limit = useRef(8);
  let offset = useRef(0);
  let [placeholderCardList, setPlaceholderCardList] = useState([]);
  const generatePlaceHolder = () => {
    let list = [];
    list.push(<PlaceholderCardComp key={1} />);
    return list;
  };
  const getMyPlaylist = useCallback(() => {
    if (hasMorePlaylist.current) {
      setPlaceholderCardList(generatePlaceHolder());
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
          setPlaceholderCardList([]);
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

  return [playlist, playlistListState, placeholderCardList, getMyPlaylist];
};
export default usePlaylistPage;
