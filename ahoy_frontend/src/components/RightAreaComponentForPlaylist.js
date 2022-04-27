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

const AlbumNameStyle = styled.div`
  width: 100%;
  margin-top: clamp(100px, 15vw, 130px);
  text-align: left;
  font-size: clamp(30px, 5vw, 100px);
  -webkit-line-clamp: 3;
`;

var hasMorePlaylistItems = true;
var isLoading = false;
var offset = 0;
var limit = 40;
const RightAreaComponentForPlaylist = React.memo((props) => {
  var { playlist } = props;

  const getPlaylistTracks = () => {
    let country = JSON.parse(localStorage.getItem("userProfile")).country;
    fetch(
      `/playlist/getPlaylistItems?playlistId=${playlist.id}&market=${country}&limit=${limit}&offset=${offset}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if ((offset + 1) * limit < json.total) {
          hasMorePlaylistItems = true;
          offset++;
        } else {
          hasMorePlaylistItems = false;
        }
        setPlaylistTrackState(json);
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
      <TrackListComponent playlistTracks={playlistTrackState} type="playlist" />
    </RightAreaContainerStyle>
  );
});

export default RightAreaComponentForPlaylist;
