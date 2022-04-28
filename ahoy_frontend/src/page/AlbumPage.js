import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RightAreaCompForCardPresent from "../components/RightAreaCompForCardPresent";
import RightAreaCompForAlbum from "../components/RightAreaCompForAlbum";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
} from "../components/ReusableStyleComp";
function AlbumPage() {
  let token = JSON.parse(localStorage.getItem("token"));
  var albumList = [];
  var album = null;
  var { state } = useLocation();
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

  var [albumListState, setAlbumListState] = useState(albumList);

  useEffect(() => {
    if (!album) {
      getUserSavedAlbum();
    }
  }, [token]);

  return (
    <>
      <DesktopOrTablet>
        <RightAreaStyleForDesktopOrTablet>
          {!album ? (
            <RightAreaCompForCardPresent
              itemList={albumListState}
              type="album"
            />
          ) : (
            <RightAreaCompForAlbum album={album} />
          )}
        </RightAreaStyleForDesktopOrTablet>
      </DesktopOrTablet>
      <Mobile>
        <RightAreaStyleForMobile>
          {!album ? (
            <RightAreaCompForCardPresent
              itemList={albumListState}
              type="album"
            />
          ) : (
            <RightAreaCompForAlbum album={album} />
          )}
        </RightAreaStyleForMobile>
      </Mobile>
    </>
  );
}

export default AlbumPage;
