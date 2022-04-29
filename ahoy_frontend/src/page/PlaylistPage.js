import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RightAreaCompForCardPresent from "../components/RightAreaCompForCardPresent";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
} from "../components/ReusableStyleComp";
import RightAreaCompForPlaylist from "../components/RightAreaCompForPlaylist";
import usePlaylistPage from "../customHooks/usePlaylistPage";

function PlaylistPage() {
  let [playlist, playlistListState] = usePlaylistPage();

  return (
    <>
      <DesktopOrTablet>
        <RightAreaStyleForDesktopOrTablet>
          {!playlist ? (
            <RightAreaCompForCardPresent
              itemList={playlistListState}
              type="playlist"
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
