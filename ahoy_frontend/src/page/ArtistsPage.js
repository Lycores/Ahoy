import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import RightAreaCompForCardPresent from "../components/RightAreaCompForCardPresent";
import RightAreaCompForArtistDetail from "../components/RightAreaCompForArtistDetail";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaStyleForMobile,
} from "../components/ReusableStyleComp";
import React from "react";

function ArtistsPage() {
  let token = JSON.parse(localStorage.getItem("token"));

  let artistsList = [];
  let artist = null;
  let { state } = useLocation();
  if (state) {
    artist = state.artist;
  }

  const getFollowedArtists = () => {
    fetch("artists/getFollowedArtists")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setArtistsListState(json.artists.items);
      });
  };
  let [artistsListState, setArtistsListState] = useState(artistsList);
  useEffect(() => {
    if (!artist) {
      getFollowedArtists();
    }
  }, [token]);

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
