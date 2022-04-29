import "bootstrap/dist/css/bootstrap-grid.css";
import React, { useEffect } from "react";
import styled from "styled-components";
import {
  RightAreaContainerStyle,
  BackgroundFilterStyle,
  RightAreaCoverStyle,
  RightAreaOverviewStyle,
  DescriptionStyle,
  RightAreaCoverContainerStyle,
} from "./ReusableStyleComp";
import usePlaylistDetail from "../customHooks/usePlaylistDetail";
import TrackListCompForPlaylist from "./TrackListCompForPlaylist";
const AlbumNameStyle = styled.div`
  width: 100%;
  margin-top: clamp(100px, 15vw, 130px);
  text-align: left;
  font-size: clamp(30px, 5vw, 100px);
  -webkit-line-clamp: 3;
`;

const RightAreaCompForPlaylist = React.memo((props) => {
  let { playlist } = props;

  let [
    coverBackgroundImageState,
    playlistOverviewBackgroundImageState,
    playlistTrackState,
    hasMorePlaylistItems,
    getPlaylistTracks,
  ] = usePlaylistDetail(playlist);

  useEffect(() => {
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
      <TrackListCompForPlaylist
        playlistTracks={playlistTrackState}
        getPlaylistTracks={getPlaylistTracks}
      />
    </RightAreaContainerStyle>
  );
});

export default RightAreaCompForPlaylist;
