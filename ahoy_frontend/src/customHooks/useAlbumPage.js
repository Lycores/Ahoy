import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
const useAlbumPage = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let album = null;
  let { state } = useLocation();
  if (state) {
    album = state.album;
  }
  let [albumListState, setAlbumListState] = useState([]);
  let hasMoreAlbum = useRef(true);
  let offset = useRef(0);
  let limit = useRef(10);

  const getUserSavedAlbum = useCallback(() => {
    if (hasMoreAlbum.current) {
      fetch(
        `album/getSavedAlbum?offset=${offset.current}&limit=${limit.current}`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          offset.current += limit.current;
          if (offset.current < json.total) {
            hasMoreAlbum.current = true;
          } else {
            hasMoreAlbum.current = false;
          }
          setAlbumListState((prevAlbumList) => {
            let albumList = [];
            json.items.forEach((item) => {
              albumList.push(item.album);
            });
            return [...prevAlbumList, ...albumList];
          });
        });
    }
  }, [offset, hasMoreAlbum]);

  useEffect(() => {
    if (!album) {
      getUserSavedAlbum();
    }
  }, [token]);

  return [album, albumListState, getUserSavedAlbum];
};

export default useAlbumPage;
