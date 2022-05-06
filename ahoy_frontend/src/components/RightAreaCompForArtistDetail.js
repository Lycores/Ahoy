import React from "react";
import styled from "styled-components";
import {
  RightAreaContainerStyle,
  RightAreaOverviewStyle,
  BackgroundFilterStyle,
  RightAreaCoverStyle,
  DescriptionStyle,
  RightAreaCoverContainerStyle,
  RightAreaStyleForDesktopOrTablet,
} from "./ReusableStyleComp";
import TrackListCompForArtist from "./TrackListCompForArtist";
import useArtistDetail from "../customHooks/useArtistDetail";
import AlbumCompForArtist from "./AlbumCompForArtist";
import useDescResizeForDesk from "../utilHooks/useDescResize";
import useFontSize from "../utilHooks/useFontSize";
import useCoverSize from "../utilHooks/useCoverSize";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
const ArtistNameStyle = styled.div`
  width: ${(props) => props.width}px;
  margin-top: clamp(100px, 12.5vw, 150px);
  text-align: left;
  font-size: clamp(
    25px,
    ${(props) => props.avgFontSize}vw,
    ${(props) => props.maxFontSize}px
  );
  text-overflow: ellipsis;
  overflow: hidden;
`;

const RightAreaCompForArtistDetail = React.memo((props) => {
  let { artist } = props;

  let [
    artistTopTrackState,
    artistAlbumsState,
    coverBackgroundImageState,
    artistOverviewBackgroundImageState,
    getArtistAlbums,
  ] = useArtistDetail(artist);

  let [maxFontSize, avgFontSize] = useFontSize(artist.name);
  let [maxCoverSize, avgCoverSize] = useCoverSize(artist.name);

  let [
    overviewCoverRef,
    descRef,
    descWidthStateForDesk,
    descWidthStateForMobile,
    trackListWidthStateForDesk,
    trackListWidthStateForMobile,
    shouldJSEngage,
  ] = useDescResizeForDesk();

  return (
    <RightAreaContainerStyle>
      <RightAreaOverviewStyle imageUrl={artistOverviewBackgroundImageState}>
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
                <ArtistNameStyle
                  width={descWidthStateForDesk}
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {artist.name}
                </ArtistNameStyle>
              </DescriptionStyle>
            ) : (
              <DescriptionStyle ref={descRef}>
                <ArtistNameStyle
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {artist.name}
                </ArtistNameStyle>
              </DescriptionStyle>
            )}
          </DesktopOrTablet>
          <Mobile>
            {shouldJSEngage ? (
              <DescriptionStyle ref={descRef}>
                <ArtistNameStyle
                  width={descWidthStateForMobile}
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {artist.name}
                </ArtistNameStyle>
              </DescriptionStyle>
            ) : (
              <DescriptionStyle ref={descRef}>
                <ArtistNameStyle
                  maxFontSize={maxFontSize}
                  avgFontSize={avgFontSize}
                >
                  {artist.name}
                </ArtistNameStyle>
              </DescriptionStyle>
            )}
          </Mobile>
        </BackgroundFilterStyle>
      </RightAreaOverviewStyle>

      <DesktopOrTablet>
        <TrackListCompForArtist
          width={trackListWidthStateForDesk}
          artistTopTrack={artistTopTrackState}
        />
      </DesktopOrTablet>
      <Mobile>
        <TrackListCompForArtist
          width={trackListWidthStateForMobile}
          artistTopTrack={artistTopTrackState}
        />
      </Mobile>

      <AlbumCompForArtist
        artistAlbums={artistAlbumsState}
        getArtistAlbums={getArtistAlbums}
      ></AlbumCompForArtist>
    </RightAreaContainerStyle>
  );
});

export default RightAreaCompForArtistDetail;
