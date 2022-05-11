import { useEffect, useState, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import PlaceholderCardComp from "../../components/placeholderComp/PlaceholderCardComp";
const useAlbumPage = () => {
  let token = sessionStorage.getItem("token");
  let album = null;
  let { state } = useLocation();
  if (state) {
    album = state.album;
  }
  let [albumListState, setAlbumListState] = useState([]);
  let hasMoreAlbum = useRef(true);
  let [placeholderCardList, setPlaceholderCardList] = useState([]);
  let offset = useRef(0);
  let limit = useRef(10);

  const generatePlaceHolder = () => {
    let list = [];
    list.push(<PlaceholderCardComp key={1} />);
    return list;
  };
  const getUserSavedAlbum = useCallback(() => {
    if (hasMoreAlbum.current) {
      setPlaceholderCardList(generatePlaceHolder());
      fetch(
        `album/getSavedAlbum?offset=${offset.current}&limit=${limit.current}&token=${token}`
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
          setPlaceholderCardList([]);
          setAlbumListState((prevAlbumList) => {
            let albumList = [];
            json.items.forEach((item) => {
              albumList.push(item.album);
            });
            return [...prevAlbumList, ...albumList];
          });
        });
    }
  }, [offset, hasMoreAlbum, token]);

  useEffect(() => {
    if (!album) {
      getUserSavedAlbum();
    }
  }, [token]);

  return [album, albumListState, placeholderCardList, getUserSavedAlbum];
};

export default useAlbumPage;
