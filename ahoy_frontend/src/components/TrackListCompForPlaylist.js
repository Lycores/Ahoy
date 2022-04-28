import TrackEntryComp from "./TrackEntryComp";
import React, { useEffect, useState, useRef } from "react";
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

var increaseKey = 999;
const TrackListComp = React.memo((props) => {
  var { playlistTracks, getMorePlaylistTracks } = props;
  var renderQueue = [];

  let observer = useRef();

  if (playlistTracks) {
    var tracks = playlistTracks;
    var tracksLen = tracks.length;
    if (tracksLen != 0) {
      renderQueue.push(
        <StyleForTrackContainer key={increaseKey + 1}>
          {tracks.map((track, index) => {
            if (index == tracksLen - 1) {
              return (
                <TrackEntryComp
                  ref={(node) => {
                    if (observer.current) {
                      observer.current.disconnect();
                    }
                    observer.current = new IntersectionObserver((entries) => {
                      if (entries[0].isIntersecting) {
                        getMorePlaylistTracks();
                      }
                    });
                    if (node) {
                      observer.current.observe(node);
                    }
                  }}
                  position={index + 1}
                  key={index}
                  track={track.track}
                  albumId={track.track.album.id}
                  positionInAlbum={track.track.track_number - 1}
                  images={track.track.album.images}
                  showImage={true}
                />
              );
            } else {
              return (
                <TrackEntryComp
                  position={index + 1}
                  key={index}
                  track={track.track}
                  albumId={track.track.album.id}
                  positionInAlbum={track.track.track_number - 1}
                  images={track.track.album.images}
                  showImage={true}
                />
              );
            }
          })}
        </StyleForTrackContainer>
      );
      increaseKey++;
    }
  } else {
    for (var i = 0; i < 10; i++) {
      renderQueue.push(<PlaceholderTrackEntryComp key={increaseKey + i} />);
    }
    increaseKey += 10;
  }

  return renderQueue;
});

export default TrackListComp;
