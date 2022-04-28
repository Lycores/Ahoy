import TrackEntryComp from "./TrackEntryComp";
import React, { useEffect, useState, useRef } from "react";
import PlaceholderTrackEntryComp from "./PlaceholderTrackEntryComp";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import styled from "styled-components";

const StyleForTrackContainer = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  margin: var(--global-margin);
  overflow: hidden;
`;

let increaseKey = 999;
const TrackListCompForAlbum = React.memo((props) => {
  let { tracks, albumId } = props;
  let renderQueue = [];
  // let [tracksState, setTracksState] = useState([]);

  const userProfileState = JSON.parse(localStorage.getItem("userProfile"));

  // useEffect(() => {
  //   if (album) {
  //     let tracks = null;
  //     try {
  //       tracks = album.tracks.items;
  //       setTracksState(tracks);
  //     } catch {
  //       fetch(
  //         `/album/getAlbum?albumId=${album.id}&market=${userProfileState.country}`
  //       )
  //         .then((response) => {
  //           return response.json();
  //         })
  //         .then((json) => {
  //           setTracksState(json.tracks.items);
  //         });
  //     }
  //   }
  // }, []);

  if (tracks.length == 0) {
    for (let i = 0; i < 10; i++) {
      renderQueue.push(<PlaceholderTrackEntryComp key={increaseKey + i} />);
    }
    increaseKey += 10;
  } else {
    renderQueue.push(
      <StyleForTrackContainer key={increaseKey + 1}>
        {tracks.map((track, index) => {
          return (
            <TrackEntryComp
              key={track.id}
              track={track}
              albumId={albumId}
              positionInAlbum={index}
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
