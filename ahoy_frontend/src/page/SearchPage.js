import { useLocation } from "react-router-dom";
import { RightAreaStyleForDesktopOrTablet } from "../components/ReusableStyleComp";
import styled from "styled-components";
import { CardCoverStyle } from "../components/ReusableStyleComp";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import useSearchPage from "../customHooks/useSearchPage";
import TrackEntryComp from "../components/TrackEntryComp";
import TrackListCompForSearch from "../components/TrackListCompForSearch";
// const HorizontalCardContainer = styled.div`
//   display: flex;
//   border-radius: var(--global-border-radius);
//   box-shadow: var(--global-box-shadow);
//   flex-wrap: nowrap;
// `;

const TopResultContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  margin-top: 80px;
  position: relative;
  gap: 10px;
`;

const TopResultForCard = styled.div`
  flex-grow: 1;
  flex-basis: 42%;
  height: 100%;
`;
const TopResultForTracks = styled.div`
  flex-grow: 1;
`;
const TopResultTitleStyle = styled.div``;
const TopResultCardAreaStyle = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  display: flex;
  flex-wrap: nowrap;
  margin-top: var(--global-margin);
  padding: var(--global-padding);
  height: 100%;
`;

const TopResultTrackAreaStyle = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  margin-top: var(--global-margin);
  margin-bottom: var(--global-margin);
  padding: var(--global-padding);
`;

const TypeInfoStyle = styled.div`
  height: 60px;
`;

//inheritance, so no need to give skeleton and imageUrl
const LocalCardCoverStyle = styled(CardCoverStyle)``;

const LocalDescriptionStyle = styled.div`
  margin-left: 10px;
  font-size: 50px;
  margin-top: clamp(50px, 10vw, 120px);
  text-align: left;
  font-size: clamp(40px, 4vw, 50px);
`;

const SearchPage = () => {
  let { state } = useLocation();
  let result = null;
  let query = null;
  if (state) {
    result = state.result;
    query = state.query;

    console.log(111111, result);
    console.log(query);
  }

  let [topResultObj, typeOfResult, topResultTracks] = useSearchPage(
    result,
    query
  );
  return (
    <RightAreaStyleForDesktopOrTablet>
      <TopResultContainerStyle>
        <TopResultForCard>
          <TopResultTitleStyle>Top Result</TopResultTitleStyle>
          <TopResultCardAreaStyle>
            {topResultObj ? (
              <>
                <div>
                  <LocalCardCoverStyle imageUrl={topResultObj.images[1].url} />
                  <TypeInfoStyle>{typeOfResult}</TypeInfoStyle>
                </div>
                <LocalDescriptionStyle>
                  {topResultObj.name}
                </LocalDescriptionStyle>
              </>
            ) : (
              <>
                <LocalCardCoverStyle skeleton="ph-item" />
              </>
            )}
          </TopResultCardAreaStyle>
        </TopResultForCard>
        <TopResultForTracks>
          <TopResultTitleStyle>Tracks</TopResultTitleStyle>
          <TopResultTrackAreaStyle>
            <TrackListCompForSearch topResultTracks={topResultTracks} />
          </TopResultTrackAreaStyle>
        </TopResultForTracks>
      </TopResultContainerStyle>
    </RightAreaStyleForDesktopOrTablet>
  );
};

export default SearchPage;
