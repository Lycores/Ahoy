import RightAreaCompForCardPresent from "../components/cardComp/RightAreaCompForCardPresent";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
  RightAreaStyle,
} from "../components/ReusableStyleComp";
import RightAreaCompForPlaylist from "../components/playlistComp/RightAreaCompForPlaylist";
import usePlaylistPage from "../customHooks/forPlaylist/usePlaylistPage";

function PlaylistPage() {
  let [playlist, playlistListState, placeholderCardList, getMorePlaylist] =
    usePlaylistPage();

  return (
    <>
      <RightAreaStyle>
        {!playlist ? (
          <RightAreaCompForCardPresent
            itemList={playlistListState}
            type="playlist"
            getMoreItems={getMorePlaylist}
            placeholder={placeholderCardList}
          />
        ) : (
          <RightAreaCompForPlaylist playlist={playlist} />
        )}
      </RightAreaStyle>
    </>
  );
}

export default PlaylistPage;
