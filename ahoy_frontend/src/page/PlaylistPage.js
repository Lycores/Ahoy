import RightAreaCompForCardPresent from "../components/cardComp/RightAreaCompForCardPresent";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
} from "../components/ReusableStyleComp";
import RightAreaCompForPlaylist from "../components/playlistComp/RightAreaCompForPlaylist";
import usePlaylistPage from "../customHooks/forPlaylist/usePlaylistPage";

function PlaylistPage() {
  let [playlist, playlistListState, getMorePlaylist] = usePlaylistPage();

  return (
    <>
      <DesktopOrTablet>
        <RightAreaStyleForDesktopOrTablet>
          {!playlist ? (
            <RightAreaCompForCardPresent
              itemList={playlistListState}
              type="playlist"
              getMoreItems={getMorePlaylist}
            />
          ) : (
            <RightAreaCompForPlaylist playlist={playlist} />
          )}
        </RightAreaStyleForDesktopOrTablet>
      </DesktopOrTablet>
      <Mobile>
        <RightAreaStyleForMobile>
          {!playlist ? (
            <RightAreaCompForCardPresent
              itemList={playlistListState}
              type="playlist"
              getMoreItems={getMorePlaylist}
            />
          ) : (
            <RightAreaCompForPlaylist playlist={playlist} />
          )}
        </RightAreaStyleForMobile>
      </Mobile>
    </>
  );
}

export default PlaylistPage;
