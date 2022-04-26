import "bootstrap/dist/css/bootstrap-grid.css";
import React, { useState, useEffect, useRef } from "react";
import TrackListComponent from "./TrackListComponent";
import styled from "styled-components";
import {
  RightAreaContainerStyle,
  BackgroundFilterStyle,
  RightAreaCoverStyle,
  RightAreaOverviewStyle,
  DescriptionStyle,
  RightAreaCoverContainerStyle,
} from "./ReusableStyleComponent";
import axios from "axios";

const AlbumNameStyle = styled.div`
  width: 100%;
  margin-top: clamp(100px, 15vw, 130px);
  text-align: left;
  font-size: clamp(30px, 5vw, 100px);
  -webkit-line-clamp: 3;
`;

const RightAreaComponentForPlaylist = React.memo((props) => {
  var { playlist } = props;

  const getPlaylistTracks = () => {
    let country = JSON.parse(localStorage.getItem("userProfile")).country;
    console.log(country);
    fetch(
      `/playlist/getPlaylistItems?playlistId=${playlist.id}&market=${country}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setPlaylistTrackState(json.items);
      });
  };

  var [coverBackgroundImageState, setCoverBackgroundImageState] = useState("");
  var [
    playlistOverviewBackgroundImageState,
    setPlaylistOverviewBackgroundImageState,
  ] = useState("");
  var [playlistTrackState, setPlaylistTrackState] = useState(null);

  useEffect(() => {
    setCoverBackgroundImageState(playlist.images[0].url);
    setPlaylistOverviewBackgroundImageState(playlist.images[0].url);
    getPlaylistTracks();
  }, [playlist]);

  return (
    <RightAreaContainerStyle>
      <RightAreaOverviewStyle imageUrl={playlistOverviewBackgroundImageState}>
        <BackgroundFilterStyle>
          <RightAreaCoverContainerStyle>
            <RightAreaCoverStyle imageUrl={coverBackgroundImageState} />
          </RightAreaCoverContainerStyle>
          <DescriptionStyle>
            <AlbumNameStyle>{playlist.name}</AlbumNameStyle>
          </DescriptionStyle>
        </BackgroundFilterStyle>
      </RightAreaOverviewStyle>
      <TrackListComponent playlistTrack={playlistTrackState} type="playlist" />
    </RightAreaContainerStyle>
  );
});

export default RightAreaComponentForPlaylist;
