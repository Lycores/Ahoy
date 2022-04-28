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
const CommonContainer = styled.div`
  margin: var(--global-margin);
  border-radius: var(--global-border-radius);
  box-shadow: var(--global-box-shadow);
`;

var increaseKey = 999;
const TrackListComp = React.memo((props) => {
  var {
    album,
    artistTopTrack,
    artistAlbums,
    playlistTracks,
    getMorePlaylistTracks,
    type,
  } = props;
  var renderQueue = [];
  var [tracksState, setTracksState] = useState([]);

  let observer = useRef();

  const loadTrackList = () => {
    if (tracksState.length == 0) {
      for (var i = 0; i < 10; i++) {
        renderQueue.push(<PlaceholderTrackEntryComp key={increaseKey + i} />);
      }
      increaseKey += 10;
    } else {
      renderQueue.push(
        <StyleForTrackContainer key={increaseKey + 1}>
          {tracksState.map((track, index) => {
            return (
              <TrackEntryComp
                key={track.id}
                track={track}
                albumId={album.id}
                positionInAlbum={index}
                images={album.images}
              />
            );
          })}
        </StyleForTrackContainer>
      );
      increaseKey++;
    }
  };
  const userProfileState = JSON.parse(localStorage.getItem("userProfile"));
  useEffect(() => {
    if (album) {
      let tracks = null;
      try {
        tracks = album.tracks.items;
        setTracksState(tracks);
      } catch {
        fetch(
          `/album/getAlbum?albumId=${album.id}&market=${userProfileState.country}`
        )
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            setTracksState(json.tracks.items);
          });
      }
    }
  }, []);

  if (type == "album") {
    loadTrackList();
  } else if (type == "artist") {
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
  } else if (type == "playlist") {
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
                          console.log(111);
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
  }
  return renderQueue;
});

export default TrackListComp;
