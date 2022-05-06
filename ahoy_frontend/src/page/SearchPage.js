import { useLocation, useNavigate } from "react-router-dom";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaContainerStyle,
} from "../components/ReusableStyleComp";
import styled from "styled-components";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import useSearchPage from "../customHooks/forSearch/useSearchPage";
import TrackEntryComp from "../components/TrackEntryComp";
import TrackListCompForSearch from "../components/searchComp/TrackListCompForSearch";
import UniversalCardComp from "../components/cardComp/UniversalCardComp";
import {
  CardContainerStyle,
  CardCoverStyle,
} from "../components/ReusableStyleComp";

import useTopTrackResize from "../utilHooks/useTopTrackResize";
import { DesktopOrTablet, Mobile } from "../MediaQuery";
import { useCallback } from "react";
import ArtistsResultComp from "../components/searchComp/ArtistsResultComp";
import TracksResultComp from "../components/searchComp/TracksResultComp";
import TopResultLeft from "../components/searchComp/TopResultLeft";
import TopResultRight from "../components/searchComp/TopResultRight";
const TopResultContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  margin-top: 80px;
  position: relative;
  gap: 10px;
`;

const SearchPage = () => {
  let { state } = useLocation();
  let result = null;
  let query = null;
  if (state) {
    result = state.result;
    query = state.query;
  }
  let [topResultObj, typeOfResult, topResultTracks, possibleResults] =
    useSearchPage(result, query);

  let [
    shouldJSEngage,
    topResultCardRef,
    topResultTracksRef,
    outerWrapperRef,
    topTracksWidthForDesk,
    topTracksWidthForMobile,
  ] = useTopTrackResize();
  return (
    <RightAreaStyleForDesktopOrTablet>
      <RightAreaContainerStyle ref={outerWrapperRef}>
        <TopResultContainerStyle>
          <TopResultLeft
            ref={topResultCardRef}
            topResultObj={topResultObj}
            typeOfResult={typeOfResult}
          />
          <TopResultRight
            ref={topResultTracksRef}
            shouldJSEngage={shouldJSEngage}
            topTracksWidthForDesk={topTracksWidthForDesk}
            topTracksWidthForMobile={topTracksWidthForMobile}
            topResultTracks={topResultTracks}
          />
        </TopResultContainerStyle>
        <TracksResultComp possibleResults={possibleResults} />
        <ArtistsResultComp possibleResults={possibleResults} />
      </RightAreaContainerStyle>
    </RightAreaStyleForDesktopOrTablet>
  );
};

export default SearchPage;
