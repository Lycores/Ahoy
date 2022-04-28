import TrackEntryComp from "./TrackEntryComp";
import React from "react";
import RightAreaCompForCardPresent from "./RightAreaCompForCardPresent";
import PlaceholderCardComp from "./PlaceholderCardComp";
import PlaceholderTrackEntryComp from "./PlaceholderTrackEntryComp";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import styled from "styled-components";
import { GridStyle, RightAreaContainerStyle } from "./ReusableStyleComp";

const StyleForTrackContainer = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  margin: var(--global-margin);
  overflow: hidden;
`;
const CommonContainer = styled.div`
  margin: var(--global-margin);
  border-radius: var(--global-border-radius);
  box-shadow: var(--global-box-shadow);
`;

var increaseKey = 999;
const TrackListCompForArtist = React.memo((props) => {
  var { artistTopTrack, artistAlbums } = props;
  var renderQueue = [];

  if (artistTopTrack) {
    var tracks = artistTopTrack.tracks;
    renderQueue.push(
      <StyleForTrackContainer key={increaseKey + 1}>
        {tracks.map((track, index) => {
          return (
            <TrackEntryComp
              key={track.id}
              track={track}
              albumId={track.album.id}
              positionInAlbum={track.track_number - 1}
              images={track.album.images}
              showImage={true}
            />
          );
        })}
      </StyleForTrackContainer>
    );
    increaseKey++;
  } else {
    for (var i = 0; i < 10; i++) {
      renderQueue.push(<PlaceholderTrackEntryComp key={increaseKey + i} />);
    }
    increaseKey += 10;
  }

  if (artistAlbums) {
    renderQueue.push(
      <CommonContainer key={increaseKey + 1}>
        <RightAreaCompForCardPresent
          itemList={artistAlbums.items}
          type="album"
        />
      </CommonContainer>
    );
    increaseKey++;
  } else {
    renderQueue.push(
      <CommonContainer key={increaseKey + 1}>
        <RightAreaContainerStyle>
          <GridStyle>
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
          </GridStyle>
        </RightAreaContainerStyle>
      </CommonContainer>
    );
    increaseKey++;
  }
  return renderQueue;
});

export default TrackListCompForArtist;
