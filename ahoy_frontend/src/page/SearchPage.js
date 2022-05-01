import { useLocation } from "react-router-dom";
import { RightAreaStyleForDesktopOrTablet } from "../components/ReusableStyleComp";
import styled from "styled-components";
import { useEffect } from "react";
import Levenshtein from "../algorithm/Levenshtein";
import { CardCoverStyle } from "../components/ReusableStyleComp";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
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
`;

const TopResultCardAreaStyle = styled.div`
  /* width: calc(50% - calc(var(--global-margin) / 2)); */
  margin-right: var(--global-margin);
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  display: flex;
  flex-wrap: wrap;
`;

const TopResultTrackAreaStyle = styled.div`
  /* width: calc(50% - calc(var(--global-margin) / 2)); */
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
`;

const LocalCardCoverStyle = styled(CardCoverStyle)`
  margin: 10px;
`;

const LocalDescriptionStyle = styled.div`
  min-width: 100px;
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

  const chooseBestMatch = (result) => {
    let minDistance = Number.MAX_SAFE_INTEGER;
    let bestMatchKey = null;
    let bestMatchObj = null;
    Object.keys(result).forEach((key) => {
      let distance = Levenshtein(
        result[key].items[0].name.toUpperCase(),
        query.toUpperCase()
      );
      if (distance < minDistance) {
        bestMatchKey = key;
        minDistance = distance;
        bestMatchObj = result[key].items[0];
      }
    });
    return [bestMatchKey, bestMatchObj];
  };
  useEffect(() => {
    if (result) {
      let [type, obj] = chooseBestMatch(result);
      console.log(type, obj);
    }
  }, [result]);
  return (
    <RightAreaStyleForDesktopOrTablet>
      <TopResultContainerStyle>
        <TopResultCardAreaStyle>
          <LocalCardCoverStyle skeleton="ph-item"></LocalCardCoverStyle>
          <LocalDescriptionStyle></LocalDescriptionStyle>
        </TopResultCardAreaStyle>
        <TopResultTrackAreaStyle></TopResultTrackAreaStyle>
      </TopResultContainerStyle>
    </RightAreaStyleForDesktopOrTablet>
  );
};

export default SearchPage;
