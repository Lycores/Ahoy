import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRecoilState } from "recoil";
import { deviceIdRecoil, recentlyPlayedRecoil } from "../recoilInfo";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import styled from "styled-components";

import PlaybackBarCompForDesk from "./playerComp/PlaybackBarCompForDesk";
import PlaybackBarCompForMobile from "./playerComp/PlaybackBarCompForMobile";

const track = {
  name: "",
  album: {
    images: [{ url: "" }],
  },
  artists: [{ name: "" }],
};

const PlayerStyleForDesktopOrTablet = styled.div`
  padding: var(--global-padding);
  width: 230px;
  box-shadow: var(--global-box-shadow);
  bottom: -10px;
  position: absolute;
  border-radius: var(--global-border-radius);
  left: var(--global-margin);
`;
const PlayerStyleForMobile = styled.div`
  position: fixed;
  width: auto;
  height: 100px;
  bottom: 0px;
  background-color: white;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: var(--global-border-radius);
  z-index: 5;
  display: flex;
  min-width: 280px;
`;

const MusicPlayerCoverStyleForDesktopOrTablet = styled.div.attrs((props) => ({
  className: props.skeleton,
}))`
  height: 230px;
  width: 230px;
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  padding: 0px;
  margin-bottom: 0px;
`;

const PlaybackBarStyle = styled.div`
  width: 230px;
  height: 50px;
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
`;

const MusicCoverStyleForMobile = styled.div.attrs((props) => ({
  className: props.skeleton,
}))`
  height: 80px;
  width: 80px;
  min-width: 80px;
  margin: var(--global-margin);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  border-radius: var(--global-border-radius);
  padding: 0px;
  margin-bottom: 0px;
`;

const BackStyle = styled.div`
  height: 60px;
  width: 60px;
  box-shadow: var(--global-box-shadow);
  background-image: url("/Users/rcmao/Desktop/ahoy/Ahoy/ahoy_frontend/src/assets/pause.png");
  background-size: contain;
`;

const VerticallyCentredStyleForPlayAndPause = styled.div`
  margin: 20px;
`;

const VerticallyCentredStyleForOthers = styled.div`
  margin: 30px;
`;

const VerticallyCentredStyle = styled.div`
  height: 50px;
  justify-content: space-around;
  width: 100%;
  margin: 20px;
`;

const WebPlayback = () => {
  let token = JSON.parse(localStorage.getItem("token"));

  let [is_paused, setPaused] = useState(false);
  let [is_active, setActive] = useState(false);
  let [player, setPlayer] = useState(undefined);
  let [current_track, setTrack] = useState(track);

  let [deviceIdState, setDevicedIdState] = useRecoilState(deviceIdRecoil);
  let [recentlyPlayedState, setRecentlyPlayedState] =
    useRecoilState(recentlyPlayedRecoil);

  const recentlyPlayedStart = useCallback(() => {
    let albumId = recentlyPlayedState.album.id;
    let positionInAlbum = recentlyPlayedState.track_number - 1;
    fetch(
      `/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}`
    );
  }, [recentlyPlayedState, deviceIdState]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: "Web Playback SDK",
        getOAuthToken: (cb) => {
          cb(token);
        },
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener("ready", ({ device_id }) => {
        setDevicedIdState(device_id);
        console.log("Ready with Device ID", device_id);
      });

      player.addListener("not_ready", ({ device_id }) => {
        console.log("Device ID has gone offline", device_id);
      });

      player.addListener("player_state_changed", (state) => {
        if (!state) {
          return;
        }
        setTrack(state.track_window.current_track);

        setPaused(state.paused);

        player.getCurrentState().then((state) => {
          !state ? setActive(false) : setActive(true);
        });
      });

      player.connect();
    };
  }, []);

  if (!is_active) {
    if (recentlyPlayedState) {
      return (
        <>
          <DesktopOrTablet>
            <PlayerStyleForDesktopOrTablet>
              <MusicPlayerCoverStyleForDesktopOrTablet
                imageUrl={recentlyPlayedState.album.images[0].url}
              />
              <PlaybackBarCompForDesk
                onBack={() => {}}
                onPlay={recentlyPlayedStart}
                onPause={() => {}}
                onForward={() => {}}
              />
            </PlayerStyleForDesktopOrTablet>
          </DesktopOrTablet>
          <Mobile>
            <PlayerStyleForMobile>
              <MusicCoverStyleForMobile
                imageUrl={recentlyPlayedState.album.images[0].url}
              />

              <PlaybackBarCompForMobile
                onBack={() => {}}
                onPlay={recentlyPlayedStart}
                onPause={() => {}}
                onForward={() => {}}
              />
            </PlayerStyleForMobile>
          </Mobile>
        </>
      );
    } else {
      return (
        <>
          <DesktopOrTablet>
            <PlayerStyleForDesktopOrTablet>
              <MusicPlayerCoverStyleForDesktopOrTablet skeleton="ph-item" />
              <PlaybackBarCompForDesk
                onBack={() => {}}
                onPlay={() => {}}
                onPause={() => {}}
                onForward={() => {}}
              />
            </PlayerStyleForDesktopOrTablet>
          </DesktopOrTablet>
          <Mobile>
            <PlayerStyleForMobile>
              <MusicCoverStyleForMobile skeleton="ph-item" />

              <PlaybackBarCompForMobile
                onBack={() => {}}
                onPlay={() => {}}
                onPause={() => {}}
                onForward={() => {}}
              />
            </PlayerStyleForMobile>
          </Mobile>
        </>
      );
    }
  } else {
    return (
      <>
        <DesktopOrTablet>
          <PlayerStyleForDesktopOrTablet>
            <MusicPlayerCoverStyleForDesktopOrTablet
              imageUrl={current_track.album.images[0].url}
            />

            <PlaybackBarCompForDesk
              isPaused={is_paused}
              onBack={() => {
                player.previousTrack();
              }}
              onPlay={() => {
                player.togglePlay();
              }}
              onPause={() => {
                player.togglePlay();
              }}
              onForward={() => {
                player.nextTrack();
              }}
            />
          </PlayerStyleForDesktopOrTablet>
        </DesktopOrTablet>
        <Mobile>
          <PlayerStyleForMobile>
            <MusicCoverStyleForMobile
              imageUrl={current_track.album.images[0].url}
            />

            <PlaybackBarCompForMobile
              isPaused={is_paused}
              onBack={() => {
                player.previousTrack();
              }}
              onPlay={() => {
                player.togglePlay();
              }}
              onPause={() => {
                player.togglePlay();
              }}
              onForward={() => {
                player.nextTrack();
              }}
            />
          </PlayerStyleForMobile>
        </Mobile>
      </>
    );
  }
};

export default WebPlayback;
