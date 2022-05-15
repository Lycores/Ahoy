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

let increaseKey = 999;
const TrackListCompForAlbum = React.memo((props) => {
  let { width, tracks, albumId } = props;
  let renderQueue = [];
  if (tracks.length === 0) {
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
  } else {
    renderQueue.push(
      <StyleForTrackContainer key={increaseKey + 1}>
        {tracks.map((track, index) => {
          return (
            <TrackEntryComp
              width={width - 30}
              number={index + 1}
              key={track.id}
              track={track}
              albumId={albumId}
              positionInAlbum={index}
              showImage={false}
              showNumber={true}
            />
          );
        })}
      </StyleForTrackContainer>
    );
    increaseKey++;
  }

  return renderQueue;
});

export default TrackListCompForAlbum;
