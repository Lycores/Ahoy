import RightAreaCompForCardPresent from "../components/RightAreaCompForCardPresent";
import RightAreaCompForArtistDetail from "../components/RightAreaCompForArtistDetail";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
} from "../components/ReusableStyleComp";
import React from "react";
import useArtistsPage from "../customHooks/useArtistsPage";

function ArtistsPage() {
  let [artist, artistsListState] = useArtistsPage();

  return (
    <>
      <DesktopOrTablet>
        <RightAreaStyleForDesktopOrTablet>
          {!artist ? (
            <RightAreaCompForCardPresent
              itemList={artistsListState}
              type="artists"
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
