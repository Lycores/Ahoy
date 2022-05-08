import RightAreaCompForCardPresent from "../components/cardComp/RightAreaCompForCardPresent";
import RightAreaCompForAlbum from "../components/albumComp/RightAreaCompForAlbum";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
} from "../components/ReusableStyleComp";
import useAlbumPage from "../customHooks/forAlbum/useAlbumPage";

function AlbumPage() {
  let [album, albumListState, placeholderCardList, getMoreAlbum] =
    useAlbumPage();

  console.log(placeholderCardList);
  return (
    <>
      <DesktopOrTablet>
        <RightAreaStyleForDesktopOrTablet>
          {!album ? (
            <RightAreaCompForCardPresent
              itemList={albumListState}
              type="album"
              getMoreItems={getMoreAlbum}
              placeholder={placeholderCardList}
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
              getMoreItems={getMoreAlbum}
              placeholder={placeholderCardList}
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
