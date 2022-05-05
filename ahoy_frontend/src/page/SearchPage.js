import { useLocation, useNavigate } from "react-router-dom";
import {
  RightAreaStyleForDesktopOrTablet,
  RightAreaContainerStyle,
} from "../components/ReusableStyleComp";
import styled from "styled-components";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import useSearchPage from "../customHooks/useSearchPage";
import TrackEntryComp from "../components/TrackEntryComp";
import TrackListCompForSearch from "../components/TrackListCompForSearch";
import UniversalCardComp from "../components/UniversalCardComp";
import {
  CardContainerStyle,
  CardCoverStyle,
} from "../components/ReusableStyleComp";
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
  flex-basis: calc(50% - calc(var(--global-margin) / 2));
  height: 100%;
  cursor: pointer;
`;
const TopResultForTracks = styled.div`
  flex-grow: 1;
  flex-basis: calc(50% - calc(var(--global-margin) / 2));
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
const LocalCardContainerStyle = styled(CardContainerStyle)`
  margin: 0px;
  /* flex-shrink: 0; */
`;
const LocalDescriptionStyle = styled.div`
  margin-left: 10px;
  font-size: 50px;
  margin-top: clamp(50px, 10vw, 120px);
  text-align: left;
  font-size: clamp(40px, 4vw, 50px);
`;

const ArtistSuggestionStyle = styled.div`
  margin: 10px;
`;

const ArtistSuggestionContainer = styled.div`
  border-radius: var(--global-border-radius);
  box-shadow: var(--global-box-shadow);
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-wrap: wrap;
  height: 300px;
  overflow-y: hidden;
  justify-content: space-around;
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

  let navigate = useNavigate();

  const goToResultPage = () => {
    if (topResultObj && typeOfResult == "artists") {
      navigate("/traditional/artists", {
        state: {
          artist: topResultObj,
        },
      });
    }
  };

  return (
    <RightAreaStyleForDesktopOrTablet>
      <RightAreaContainerStyle>
        <TopResultContainerStyle>
          <TopResultForCard onClick={goToResultPage}>
            <TopResultTitleStyle>Top Result</TopResultTitleStyle>
            <TopResultCardAreaStyle>
              {topResultObj ? (
                <>
                  <div>
                    <LocalCardCoverStyle
                      imageUrl={topResultObj.images[1].url}
                    />
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
        <ArtistSuggestionStyle>
          <TopResultTitleStyle>Artists</TopResultTitleStyle>

          <ArtistSuggestionContainer>
            {possibleResults.length != 0 && typeOfResult ? (
              possibleResults[typeOfResult].items.map((ps, index) => {
                console.log(possibleResults[typeOfResult]);
                if (ps.images.length != 0) {
                  return (
                    <LocalCardContainerStyle key={index}>
                      <CardCoverStyle imageUrl={ps.images[1].url} />
                      <div>{ps.name}</div>
                    </LocalCardContainerStyle>
                  );
                } else {
                  return <></>;
                }
              })
            ) : (
              <></>
            )}
          </ArtistSuggestionContainer>
        </ArtistSuggestionStyle>
      </RightAreaContainerStyle>
    </RightAreaStyleForDesktopOrTablet>
  );
};

export default SearchPage;
