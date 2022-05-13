import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRecoilState } from "recoil";
import { deviceIdRecoil, recentlyPlayedRecoil } from "../recoilInfo";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import PlaybackBarCompForDesk from "./playerComp/PlaybackBarCompForDesk";
import PlaybackBarCompForMobile from "./playerComp/PlaybackBarCompForMobile";
import { useNavigate } from "react-router-dom";
const AlbumIcon = styled.i`
  display: block;
  font-size: 25px;
`;
const ArtistIcon = styled.i`
  font-size: 25px;
  text-align: center;
`;
const PlaylistIcon = styled.i`
  font-size: 25px;
  text-align: center;
`;

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
  bottom: 10px;
  position: absolute;
  border-radius: var(--global-border-radius);
  left: var(--global-margin);
`;
const PlayerStyleForMobile = styled.div`
  width: auto;
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

const MusicPlayerCoverStyleForDesktopOrTablet = styled.div.attrs((props) => ({
  className: props.skeleton,
}))`
  height: var(--player-cover-size-desktop);
  width: var(--player-cover-size-desktop);
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  padding: 0px;
  margin-bottom: 0px;
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

const Container = styled.div`
  border-radius: var(--global-border-radius);
  box-shadow: var(--global-box-shadow);
  position: fixed;
  left: 10px;
  right: 10px;
  bottom: 10px;
  opacity: 0.9;
  z-index: 5;
  min-width: 280px;
  background-color: var(--global-background-color);
`;

const MobileNavBar = styled.div`
  display: flex;
  gap: 10px;
  padding: var(--global-padding);
  padding-bottom: 0px;
`;

const NavBarItem = styled.div`
  height: 40px;
  flex-grow: 1;
  flex-shrink: 1;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--global-spotify-color);
  }
  &:active {
    background-color: var(--global-spotify-color);
  }
`;
const AlbumMobileNavBarItem = styled(NavBarItem)``;
const ArtistsMobileNavBarItem = styled(NavBarItem)``;
const PlaylistMobileNavBarItem = styled(NavBarItem)``;
const WebPlayback = () => {
  let token = sessionStorage.getItem("token");

  let [is_paused, setPaused] = useState(false);
  let [is_active, setActive] = useState(false);
  let [player, setPlayer] = useState(undefined);
  let [current_track, setTrack] = useState(track);

  let [deviceIdState, setDevicedIdState] = useRecoilState(deviceIdRecoil);
  let [recentlyPlayedState, setRecentlyPlayedState] =
    useRecoilState(recentlyPlayedRecoil);

  const navigate = useNavigate();
  const recentlyPlayedStart = useCallback(() => {
    let albumId = recentlyPlayedState.album.id;
    let positionInAlbum = recentlyPlayedState.track_number - 1;
    fetch(
      `/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}&token=${token}`
    );
  }, [recentlyPlayedState, deviceIdState, token]);

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
            <Container>
              <MobileNavBar>
                <AlbumMobileNavBarItem>
                  <AlbumIcon
                    className="fa-solid fa-compact-disc"
                    onClick={() => {
                      navigate("/traditional/album");
                    }}
                  />
                </AlbumMobileNavBarItem>
                <ArtistsMobileNavBarItem>
                  <ArtistIcon
                    className="fa-solid fa-palette"
                    onClick={() => {
                      navigate("/traditional/artists");
                    }}
                  />
                </ArtistsMobileNavBarItem>
                <PlaylistMobileNavBarItem>
                  <PlaylistIcon
                    className="fa-solid fa-list"
                    onClick={() => {
                      navigate("/traditional/playlist");
                    }}
                  />
                </PlaylistMobileNavBarItem>
              </MobileNavBar>
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
            </Container>
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
            <Container>
              <MobileNavBar>
                <AlbumMobileNavBarItem>
                  <AlbumIcon
                    className="fa-solid fa-compact-disc"
                    onClick={() => {
                      navigate("/traditional/album");
                    }}
                  />
                </AlbumMobileNavBarItem>
                <ArtistsMobileNavBarItem>
                  <ArtistIcon
                    className="fa-solid fa-palette"
                    onClick={() => {
                      navigate("/traditional/artists");
                    }}
                  />
                </ArtistsMobileNavBarItem>
                <PlaylistMobileNavBarItem>
                  <PlaylistIcon
                    className="fa-solid fa-list"
                    onClick={() => {
                      navigate("/traditional/playlist");
                    }}
                  />
                </PlaylistMobileNavBarItem>
              </MobileNavBar>
              <PlayerStyleForMobile>
                <MusicCoverStyleForMobile skeleton="ph-item" />

                <PlaybackBarCompForMobile
                  onBack={() => {}}
                  onPlay={() => {}}
                  onPause={() => {}}
                  onForward={() => {}}
                />
              </PlayerStyleForMobile>
            </Container>
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
          <Container>
            <MobileNavBar>
              <AlbumMobileNavBarItem>
                <AlbumIcon
                  className="fa-solid fa-compact-disc"
                  onClick={() => {
                    navigate("/traditional/album");
                  }}
                />
              </AlbumMobileNavBarItem>
              <ArtistsMobileNavBarItem>
                <ArtistIcon
                  className="fa-solid fa-palette"
                  onClick={() => {
                    navigate("/traditional/artists");
                  }}
                />
              </ArtistsMobileNavBarItem>
              <PlaylistMobileNavBarItem>
                <PlaylistIcon
                  className="fa-solid fa-list"
                  onClick={() => {
                    navigate("/traditional/playlist");
                  }}
                />
              </PlaylistMobileNavBarItem>
            </MobileNavBar>
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
          </Container>
        </Mobile>
      </>
    );
  }
};

export default WebPlayback;
