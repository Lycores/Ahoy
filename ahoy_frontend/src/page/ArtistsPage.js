import RightAreaCompForCardPresent from "../components/cardComp/RightAreaCompForCardPresent";
import RightAreaCompForArtistDetail from "../components/artistComp/RightAreaCompForArtistDetail";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
} from "../components/ReusableStyleComp";
import React from "react";
import useArtistsPage from "../customHooks/forArtist/useArtistsPage";

function ArtistsPage() {
  let [artist, artistsListState, getMoreArtist] = useArtistsPage();

  return (
    <>
      <DesktopOrTablet>
        <RightAreaStyleForDesktopOrTablet>
          {!artist ? (
            <RightAreaCompForCardPresent
              itemList={artistsListState}
              type="artists"
              getMoreItems={getMoreArtist}
            />
          ) : (
            <RightAreaCompForArtistDetail artist={artist} />
          )}
        </RightAreaStyleForDesktopOrTablet>
      </DesktopOrTablet>
      <Mobile>
        <RightAreaStyleForMobile>
          {!artist ? (
            <RightAreaCompForCardPresent
              itemList={artistsListState}
              type="artists"
              getMoreItems={getMoreArtist}
            />
          ) : (
            <RightAreaCompForArtistDetail artist={artist} />
          )}
        </RightAreaStyleForMobile>
      </Mobile>
    </>
  );
}

export default React.memo(ArtistsPage);
