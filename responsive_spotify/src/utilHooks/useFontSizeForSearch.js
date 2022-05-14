import { useLayoutEffect, useRef } from "react";

const useFontSizeForSearch = (obj) => {
  let maxFontSize = useRef(null);
  let avgFontSize = useRef(null);

  useLayoutEffect(() => {
    if (!obj) {
      maxFontSize.current = 20;
      avgFontSize.current = 1;
    } else {
      let str = obj.name;
      if (str.length <= 8) {
        maxFontSize.current = 60;
        avgFontSize.current = 4;
      } else if (str.length <= 15) {
        maxFontSize.current = 45;
        avgFontSize.current = 3;
      } else if (15 < str.length < 25) {
        maxFontSize.current = 35;
        avgFontSize.current = 2;
      } else {
        maxFontSize.current = 20;
        avgFontSize.current = 1.5;
      }
    }
  }, [obj]);

  return [maxFontSize.current, avgFontSize.current];
};

export default useFontSizeForSearch;
