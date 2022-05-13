import TrackEntryComp from "../TrackEntryComp";
import React, { useCallback, useRef } from "react";
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
const TrackListComp = React.memo((props) => {
  let { width, playlistTracks, getPlaylistTracks } = props;
  let renderQueue = [];

  let observer = useRef();

  let lastElement = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          getPlaylistTracks();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [observer]
  );

  if (playlistTracks.length != 0) {
    let tracks = playlistTracks;
    let tracksLen = tracks.length;
    if (tracksLen != 0) {
      renderQueue.push(
        <StyleForTrackContainer key={increaseKey + 1}>
          {tracks.map((track, index) => {
            if (index === tracksLen - 1) {
              return (
                <TrackEntryComp
                  width={width - 20}
                  ref={lastElement}
                  number={index + 1}
                  key={index}
                  track={track.track}
                  albumId={track.track.album.id}
                  positionInAlbum={track.track.track_number - 1}
                  images={track.track.album.images}
                  showImage={true}
                  showNumber={true}
                />
              );
            } else {
              return (
                <TrackEntryComp
                  width={width - 20}
                  number={index + 1}
                  key={index}
                  track={track.track}
                  albumId={track.track.album.id}
                  positionInAlbum={track.track.track_number - 1}
                  images={track.track.album.images}
                  showImage={true}
                  showNumber={true}
                />
              );
            }
          })}
        </StyleForTrackContainer>
      );
      increaseKey++;
    }
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

export default TrackListComp;
