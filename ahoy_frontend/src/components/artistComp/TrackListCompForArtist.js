import TrackEntryComp from "../TrackEntryComp";
import React from "react";
import PlaceholderTrackEntryComp from "../placeholderComp/PlaceholderTrackEntryComp";
import "../../stylesheets/css/placeholderCardComponentStyleSheet.css";
import styled from "styled-components";

const StyleForTrackContainer = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  margin: var(--global-margin);
  overflow: hidden;
  padding: var(--global-padding-for-card);
`;

var increaseKey = 999;
const TrackListCompForArtist = React.memo((props) => {
  let { width, artistTopTrack } = props;
  let renderQueue = [];

  if (artistTopTrack.length !== 0) {
    let tracks = artistTopTrack.tracks;
    renderQueue.push(
      <StyleForTrackContainer key={increaseKey + 1}>
        {tracks.map((track, index) => {
          return (
            <TrackEntryComp
              width={width - 20}
              number={index + 1}
              key={track.id}
              track={track}
              albumId={track.album.id}
              positionInAlbum={track.track_number - 1}
              images={track.album.images}
              showImage={true}
              showNumber={true}
            />
          );
        })}
      </StyleForTrackContainer>
    );
    increaseKey++;
  } else {
    let list = [];
    for (let i = 0; i < 10; i++) {
      list.push(<PlaceholderTrackEntryComp key={increaseKey + i} />);
    }
    increaseKey += 10;
    renderQueue.push(
      <StyleForTrackContainer key={increaseKey + 1}>
        {list}
      </StyleForTrackContainer>
    );
    increaseKey++;
  }

  return renderQueue;
});

export default TrackListCompForArtist;
