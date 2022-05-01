import { useLocation } from "react-router-dom";
import { RightAreaStyleForDesktopOrTablet } from "../components/ReusableStyleComp";
import styled from "styled-components";
import { useEffect } from "react";
import Levenshtein from "../algorithm/Levenshtein";
const HorizontalCardContainer = styled.div`
  display: flex;
  border-radius: var(--global-border-radius);
  box-shadow: var(--global-box-shadow);
  flex-wrap: nowrap;
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
  return <RightAreaStyleForDesktopOrTablet></RightAreaStyleForDesktopOrTablet>;
};

export default SearchPage;
