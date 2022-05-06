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
} from "../ReusableStyleComp";
import usePlaylistDetail from "../../customHooks/forPlaylist/usePlaylistDetail";
import TrackListCompForPlaylist from "./TrackListCompForPlaylist";
import useFontSize from "../../utilHooks/useFontSize";
import useCoverSize from "../../utilHooks/useCoverSize";
import { DesktopOrTablet, Mobile } from "../../MediaQuery";
import useDescResizeForDesk from "../../utilHooks/useDescResize";

const PlaylistNameStyle = styled.div`
  width: ${(props) => props.width}px;
  margin-top: clamp(100px, 15vw, 130px);
  text-align: left;
  font-size: clamp(
    30px,
    ${(props) => props.avgFontSize}vw,
    ${(props) => props.maxFontSize}px
  );
`;

const RightAreaCompForPlaylist = React.memo((props) => {
  let { playlist } = props;

  let [
    coverBackgroundImageState,
    playlistOverviewBackgroundImageState,
    playlistTrackState,
    getPlaylistTracks,
  ] = usePlaylistDetail(playlist);

  let [maxFontSize, avgFontSize] = useFontSize(playlist.name);
  let [maxCoverSize, avgCoverSize] = useCoverSize(playlist.name);

  let [
    overviewCoverRef,
    descRef,
    descWidthStateForDesk,
    descWidthStateForMobile,
    trackListWidthStateForDesk,
    trackListWidthStateForMobile,
    shouldJSEngage,
  ] = useDescResizeForDesk();

  useEffect(() => {
    getPlaylistTracks();
  }, [playlist]);

  return (
    <RightAreaContainerStyle>
      <RightAreaOverviewStyle imageUrl={playlistOverviewBackgroundImageState}>
        <BackgroundFilterStyle>
          <RightAreaCoverContainerStyle
            maxCoverSize={maxCoverSize}
            avgCoverSize={avgCoverSize}
            ref={overviewCoverRef}
          >
            <RightAreaCoverStyle imageUrl={coverBackgroundImageState} />
          </RightAreaCoverContainerStyle>
          <DesktopOrTablet>
            {shouldJSEngage ? (
              <DescriptionStyle ref={descRef}>
                <PlaylistNameStyle
                  width={descWidthStateForDesk}
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {playlist.name}
                </PlaylistNameStyle>
              </DescriptionStyle>
            ) : (
              <DescriptionStyle ref={descRef}>
                <PlaylistNameStyle
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {playlist.name}
                </PlaylistNameStyle>
              </DescriptionStyle>
            )}
          </DesktopOrTablet>

          <Mobile>
            {shouldJSEngage ? (
              <DescriptionStyle ref={descRef}>
                <PlaylistNameStyle
                  width={descWidthStateForMobile}
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {playlist.name}
                </PlaylistNameStyle>
              </DescriptionStyle>
            ) : (
              <DescriptionStyle ref={descRef}>
                <PlaylistNameStyle
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {playlist.name}
                </PlaylistNameStyle>
              </DescriptionStyle>
            )}
          </Mobile>
        </BackgroundFilterStyle>
      </RightAreaOverviewStyle>

      <DesktopOrTablet>
        <TrackListCompForPlaylist
          width={trackListWidthStateForDesk}
          playlistTracks={playlistTrackState}
          getPlaylistTracks={getPlaylistTracks}
        />
      </DesktopOrTablet>

      <Mobile>
        <TrackListCompForPlaylist
          width={trackListWidthStateForMobile}
          playlistTracks={playlistTrackState}
          getPlaylistTracks={getPlaylistTracks}
        />
      </Mobile>
    </RightAreaContainerStyle>
  );
});

export default RightAreaCompForPlaylist;
