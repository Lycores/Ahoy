import RightAreaCompForCardPresent from "../components/cardComp/RightAreaCompForCardPresent";
import RightAreaCompForArtistDetail from "../components/artistComp/RightAreaCompForArtistDetail";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
  RightAreaStyle,
} from "../components/ReusableStyleComp";
import React from "react";
import useArtistsPage from "../customHooks/forArtist/useArtistsPage";

function ArtistsPage() {
  let [artist, artistsListState, getMoreArtist] = useArtistsPage();

  return (
    <>
      <RightAreaStyle>
        {!artist ? (
          <RightAreaCompForCardPresent
            itemList={artistsListState}
            type="artists"
            getMoreItems={getMoreArtist}
          />
        ) : (
          <RightAreaCompForArtistDetail artist={artist} />
        )}
      </RightAreaStyle>
    </>
  );
}

export default React.memo(ArtistsPage);
