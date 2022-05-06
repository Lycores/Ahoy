import { useEffect, useRef, useState } from "react";
import Levenshtein from "../../algorithm/Levenshtein";

import "../../stylesheets/css/placeholderCardComponentStyleSheet.css";
const useSearchPage = (result, query) => {
  let [topResultObj, setTopResultObj] = useState(null);
  let [typeOfResult, setTypeOfResult] = useState(null);
  let [topResultTracks, setTopResultTracks] = useState([]);
  let [possibleResultsState, setPossibleResultState] = useState([]);
  let userProfileState = JSON.parse(localStorage.getItem("userProfile"));
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

  const getRelatedTracks = (obj, type) => {
    if (type == "artists") {
      fetch(
        `/artists/getArtistTopTrack?artistId=${obj.id}&market=${userProfileState.country}`
      )
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setTopResultTracks(json.tracks.slice(0, 4));
        });
    } else if (type == "tracks") {
    }
  };

  useEffect(() => {
    if (result) {
      let [type, obj] = chooseBestMatch(result);
      getRelatedTracks(obj, type);
      setPossibleResultState(result);
      setTopResultObj(obj);
      setTypeOfResult(type);
    }
  }, [result]);

  return [topResultObj, typeOfResult, topResultTracks, possibleResultsState];
};

export default useSearchPage;
