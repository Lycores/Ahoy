import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const useAlbumPage = () => {
  let token = JSON.parse(localStorage.getItem("token"));
  let albumList = [];
  let album = null;
  let { state } = useLocation();
  if (state) {
    album = state.album;
  }

  const getUserSavedAlbum = () => {
    fetch("album/getSavedAlbum")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        json.items.forEach((albumObj) => {
          albumList.push(albumObj.album);
        });
        setAlbumListState([...albumList]);
      });
  };

  let [albumListState, setAlbumListState] = useState(albumList);

  useEffect(() => {
    if (!album) {
      getUserSavedAlbum();
    }
  }, [token]);

  return [album, albumListState];
};

export default useAlbumPage;
