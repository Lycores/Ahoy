import styled from "styled-components";
import TrackListCompForSearch from "./TrackListCompForSearch";
import { DesktopOrTablet, Mobile } from "../../MediaQuery";
import React from "react";
import { TopResultTitleStyle } from "../ReusableStyleComp";
const TopResultForTracks = styled.div`
  flex-grow: 1;
  flex-basis: calc(50% - calc(var(--global-margin) / 2));
`;

const TopResultTrackAreaStyle = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  margin-top: var(--global-margin);
  margin-bottom: var(--global-margin);
  padding: var(--global-padding);
  overflow: hidden;
`;

const TopResultRight = React.forwardRef((props, topResultTracksRef) => {
  let {
    shouldJSEngage,
    topTracksWidthForDesk,
    topTracksWidthForMobile,
    topResultTracks,
  } = props;

  return shouldJSEngage ? (
    <TopResultForTracks ref={topResultTracksRef}>
      <TopResultTitleStyle>Tracks</TopResultTitleStyle>

      <DesktopOrTablet>
        <TopResultTrackAreaStyle>
          <TrackListCompForSearch
            width={topTracksWidthForDesk}
            topResultTracks={topResultTracks}
          />
        </TopResultTrackAreaStyle>
      </DesktopOrTablet>

      <Mobile>
        <TopResultTrackAreaStyle>
          <TrackListCompForSearch
            width={topTracksWidthForMobile}
            topResultTracks={topResultTracks}
          />
        </TopResultTrackAreaStyle>
      </Mobile>
    </TopResultForTracks>
  ) : (
    <TopResultForTracks ref={topResultTracksRef}>
      <TopResultTitleStyle>Tracks</TopResultTitleStyle>

      <DesktopOrTablet>
        <TopResultTrackAreaStyle>
          <TrackListCompForSearch topResultTracks={topResultTracks} />
        </TopResultTrackAreaStyle>
      </DesktopOrTablet>

      <Mobile>
        <TopResultTrackAreaStyle>
          <TrackListCompForSearch topResultTracks={topResultTracks} />
        </TopResultTrackAreaStyle>
      </Mobile>
    </TopResultForTracks>
  );
});

export default TopResultRight;
