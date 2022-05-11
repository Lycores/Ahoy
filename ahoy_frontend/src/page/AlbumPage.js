import RightAreaCompForCardPresent from "../components/cardComp/RightAreaCompForCardPresent";
import RightAreaCompForAlbum from "../components/albumComp/RightAreaCompForAlbum";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
  RightAreaStyle,
} from "../components/ReusableStyleComp";
import useAlbumPage from "../customHooks/forAlbum/useAlbumPage";

function AlbumPage() {
  let [album, albumListState, placeholderCardList, getMoreAlbum] =
    useAlbumPage();

  console.log(placeholderCardList);
  return (
    <>
      <RightAreaStyle>
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
      </RightAreaStyle>
    </>
  );
}

export default AlbumPage;
