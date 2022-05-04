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
const AlbumNameStyle = styled.div`
  width: 100%;
  margin-top: clamp(100px, 15vw, 180px);
  text-align: left;
  font-size: clamp(30px, 5vw, 100px);
`;

const RightAreaCompForAlbum = React.memo((props) => {
  let { album } = props;

  let [
    tracks,
    albumId,
    coverBackgroundImageState,
    albumOverviewBackgroundImageState,
  ] = useAlbumDetail(album);

  let [overviewCoverRef, descWidthStateForDesk, descWidthStateForMobile] =
    useDescResizeForDesk();

  useDescResizeForDesk();
  return (
    <RightAreaContainerStyle>
      <RightAreaOverviewStyle imageUrl={albumOverviewBackgroundImageState}>
        <BackgroundFilterStyle>
          <RightAreaCoverContainerStyle ref={overviewCoverRef}>
            <RightAreaCoverStyle imageUrl={coverBackgroundImageState} />
          </RightAreaCoverContainerStyle>
          <DesktopOrTablet>
            <DescriptionStyle width={descWidthStateForDesk}>
              <AlbumNameStyle>{album.name}</AlbumNameStyle>
            </DescriptionStyle>
          </DesktopOrTablet>
          <Mobile>
            <DescriptionStyle width={descWidthStateForMobile}>
              <AlbumNameStyle>{album.name}</AlbumNameStyle>
            </DescriptionStyle>
          </Mobile>
        </BackgroundFilterStyle>
      </RightAreaOverviewStyle>
      <TrackListCompForAlbum tracks={tracks} albumId={albumId} />
    </RightAreaContainerStyle>
  );
});

export default RightAreaCompForAlbum;
