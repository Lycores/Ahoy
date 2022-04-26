import React, { useEffect, useState } from "react";
import TrackListComponent from "./TrackListComponent";
import styled from "styled-components";
import {
  RightAreaContainerStyle,
  RightAreaOverviewStyle,
  BackgroundFilterStyle,
  RightAreaCoverStyle,
  DescriptionStyle,
  RightAreaCoverContainerStyle,
} from "./ReusableStyleComponent";

const ArtistNameStyle = styled.div`
  width: 100%;
  margin-top: clamp(100px, 12.5vw, 150px);
  text-align: left;
  font-size: clamp(30px, 6vw, 80px);
`;

const RightAreaComponentForArtistDetail = React.memo((props) => {
  let { artist } = props;
  const userProfileState = JSON.parse(localStorage.getItem("userProfile"));
  const getArtistTopTrack = () => {
    fetch(
      `/artists/getArtistTopTrack?artistId=${artist.id}&market=${userProfileState.country}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setArtistTopTrackState(json);
      });
  };

  const getArtistAlbums = async () => {
    fetch(
      `/artists/getArtistAlbums?artistId=${artist.id}&market=${userProfileState.country}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setArtistAlbumsState(json);
      });
  };

  useEffect(() => {
    setCoverBackgroundImageState(artist.images[1].url);
    setArtistOverviewBackgroundImageState(artist.images[0].url);
    getArtistTopTrack();
    getArtistAlbums();
  }, [artist]);

  var [artistTopTrackState, setArtistTopTrackState] = useState(null);
  var [artistAlbumsState, setArtistAlbumsState] = useState(null);
  var [coverBackgroundImageState, setCoverBackgroundImageState] = useState("");
  var [
    artistOverviewBackgroundImageState,
    setArtistOverviewBackgroundImageState,
  ] = useState("");

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
      <TrackListComponent
        artistTopTrack={artistTopTrackState}
        artistAlbums={artistAlbumsState}
        type={"artist"}
      />
    </RightAreaContainerStyle>
  );
});

export default RightAreaComponentForArtistDetail;
