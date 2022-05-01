import { useEffect, useRef, useState } from "react";
import Levenshtein from "../algorithm/Levenshtein";

import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
const useSearchPage = (result, query) => {
  let [topResultObj, setTopResultObj] = useState(null);
  let [typeOfResult, setTypeOfResult] = useState(null);

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
      setTopResultObj(obj);
      setTypeOfResult(type);
    }
  }, [result]);

  return [topResultObj, typeOfResult];
};

export default useSearchPage;
