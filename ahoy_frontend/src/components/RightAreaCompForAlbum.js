import "bootstrap/dist/css/bootstrap-grid.css";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  RightAreaContainerStyle,
  BackgroundFilterStyle,
  RightAreaCoverStyle,
  RightAreaOverviewStyle,
  DescriptionStyle,
  RightAreaCoverContainerStyle,
} from "./ReusableStyleComp";
import TrackListCompForAlbum from "./TrackListCompForAlbum";
import useAlbumDetail from "../customHooks/useAlbumDetail";
import useDescResizeForDesk from "../customHooks/useDescResizeForDesk";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import useFontSize from "../utilHooks/useFontSize";
const AlbumNameStyle = styled.div`
  width: 100%;
  margin-top: clamp(100px, 13vw, 150px);
  text-align: left;
  font-size: clamp(
    30px,
    ${(props) => props.avgFontSize}vw,
    ${(props) => props.maxFontSize}px
  );
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
  console.log(maxFontSize, avgFontSize);

  let [
    overviewCoverRef,
    descRef,
    descWidthStateForDesk,
    descWidthStateForMobile,
    shouldJSEngage,
  ] = useDescResizeForDesk();

  console.log(shouldJSEngage);

  useDescResizeForDesk();
  return (
    <RightAreaContainerStyle>
      <RightAreaOverviewStyle imageUrl={albumOverviewBackgroundImageState}>
        <BackgroundFilterStyle>
          <RightAreaCoverContainerStyle ref={overviewCoverRef}>
            <RightAreaCoverStyle imageUrl={coverBackgroundImageState} />
          </RightAreaCoverContainerStyle>
          <DesktopOrTablet>
            {shouldJSEngage ? (
              <DescriptionStyle ref={descRef} width={descWidthStateForDesk}>
                <AlbumNameStyle
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {album.name}
                </AlbumNameStyle>
              </DescriptionStyle>
            ) : (
              <DescriptionStyle ref={descRef}>
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
              <DescriptionStyle width={descWidthStateForMobile}>
                <AlbumNameStyle
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {album.name}
                </AlbumNameStyle>
              </DescriptionStyle>
            ) : (
              <DescriptionStyle>
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
      <TrackListCompForAlbum tracks={tracks} albumId={albumId} />
    </RightAreaContainerStyle>
  );
});

export default RightAreaCompForAlbum;
