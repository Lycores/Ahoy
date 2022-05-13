import "bootstrap/dist/css/bootstrap-grid.css";
import { useOutletContext } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  RightAreaContainerStyle,
  BackgroundFilterStyle,
  RightAreaCoverStyle,
  RightAreaOverviewStyle,
  DescriptionStyle,
  RightAreaCoverContainerStyle,
} from "../ReusableStyleComp";
import TrackListCompForAlbum from "./TrackListCompForAlbum";
import useAlbumDetail from "../../customHooks/forAlbum/useAlbumDetail";
import useDescResize from "../../utilHooks/useDescResize";
import { DesktopOrTablet, Mobile } from "../../MediaQuery";
import useFontSize from "../../utilHooks/useFontSize";
import useCoverSize from "../../utilHooks/useCoverSize";
const AlbumNameStyle = styled.div`
  width: ${(props) => props.width}px;
  margin-top: clamp(100px, 13vw, 150px);
  text-align: left;
  font-size: clamp(
    25px,
    ${(props) => props.avgFontSize}vw,
    ${(props) => props.maxFontSize}px
  );
  text-overflow: ellipsis;
  overflow: hidden;
`;

const RightAreaCompForAlbum = React.memo((props) => {
  let { album } = props;

  let [
    tracks,
    albumId,
    coverBackgroundImageState,
    albumOverviewBackgroundImageState,
  ] = useAlbumDetail(album);

  let [maxFontSize, avgFontSize] = useFontSize(album.name);
  let [maxCoverSize, avgCoverSize] = useCoverSize(album.name);

  let [
    overviewCoverRef,
    descRef,
    descWidthStateForDesk,
    descWidthStateForMobile,
    trackListWidthStateForDesk,
    trackListWidthStateForMobile,
    shouldJSEngage,
  ] = useDescResize();
  return (
    <RightAreaContainerStyle>
      <RightAreaOverviewStyle imageUrl={albumOverviewBackgroundImageState}>
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
              <DescriptionStyle ref={(node) => (descRef.current = node)}>
                <AlbumNameStyle
                  width={descWidthStateForDesk}
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {album.name}
                </AlbumNameStyle>
              </DescriptionStyle>
            ) : (
              <DescriptionStyle ref={(node) => (descRef.current = node)}>
                <AlbumNameStyle
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {album.name}
                </AlbumNameStyle>
              </DescriptionStyle>
            )}
          </DesktopOrTablet>
          <Mobile>
            {shouldJSEngage ? (
              <DescriptionStyle ref={(node) => (descRef.current = node)}>
                <AlbumNameStyle
                  width={descWidthStateForMobile}
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {album.name}
                </AlbumNameStyle>
              </DescriptionStyle>
            ) : (
              <DescriptionStyle ref={(node) => (descRef.current = node)}>
                <AlbumNameStyle
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {album.name}
                </AlbumNameStyle>
              </DescriptionStyle>
            )}
          </Mobile>
        </BackgroundFilterStyle>
      </RightAreaOverviewStyle>
      <DesktopOrTablet>
        <TrackListCompForAlbum
          width={trackListWidthStateForDesk}
          tracks={tracks}
          albumId={albumId}
        />
      </DesktopOrTablet>
      <Mobile>
        <TrackListCompForAlbum
          width={trackListWidthStateForMobile}
          tracks={tracks}
          albumId={albumId}
        />
      </Mobile>
    </RightAreaContainerStyle>
  );
});

export default RightAreaCompForAlbum;
