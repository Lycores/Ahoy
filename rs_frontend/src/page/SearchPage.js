import { useLocation } from "react-router-dom";
import {
  RightAreaContainerStyle,
  RightAreaStyle,
} from "../components/ReusableStyleComp";
import styled from "styled-components";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import useSearchPage from "../customHooks/forSearch/useSearchPage";
import useTopTrackResize from "../utilHooks/useTopTrackResize";
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
    <RightAreaStyle>
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
        {possibleResults ? (
          <>
            <TracksResultComp possibleTracks={possibleResults.tracks.items} />
            <ArtistsResultComp
              possibleArtists={possibleResults.artists.items}
            />
          </>
        ) : (
          <></>
        )}
      </RightAreaContainerStyle>
    </RightAreaStyle>
  );
};

export default SearchPage;
