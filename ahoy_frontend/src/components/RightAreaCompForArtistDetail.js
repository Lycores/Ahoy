import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  RightAreaContainerStyle,
  RightAreaOverviewStyle,
  BackgroundFilterStyle,
  RightAreaCoverStyle,
  DescriptionStyle,
  RightAreaCoverContainerStyle,
} from "./ReusableStyleComp";
import TrackListCompForArtist from "./TrackListCompForArtist";
import useArtist from "../customHooks/useArtist";
const ArtistNameStyle = styled.div`
  width: 100%;
  margin-top: clamp(100px, 12.5vw, 150px);
  text-align: left;
  font-size: clamp(30px, 6vw, 80px);
`;

const RightAreaCompForArtistDetail = React.memo((props) => {
  let { artist } = props;

  let [
    artistTopTrackState,
    artistAlbumsState,
    coverBackgroundImageState,
    artistOverviewBackgroundImageState,
    getArtistAlbums,
  ] = useArtist(artist);

  return (
    <RightAreaContainerStyle>
      <RightAreaOverviewStyle imageUrl={artistOverviewBackgroundImageState}>
        <BackgroundFilterStyle>
          <RightAreaCoverContainerStyle>
            <RightAreaCoverStyle imageUrl={coverBackgroundImageState} />
          </RightAreaCoverContainerStyle>
          <DescriptionStyle>
            <ArtistNameStyle>{artist.name}</ArtistNameStyle>
          </DescriptionStyle>
        </BackgroundFilterStyle>
      </RightAreaOverviewStyle>
      <TrackListCompForArtist
        artistTopTrack={artistTopTrackState}
        artistAlbums={artistAlbumsState}
        getArtistAlbums={getArtistAlbums}
      />
    </RightAreaContainerStyle>
  );
});

export default RightAreaCompForArtistDetail;
