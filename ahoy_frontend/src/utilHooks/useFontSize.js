import { useLayoutEffect, useRef } from "react";

const useFontSize = (str) => {
  let maxFontSize = useRef(null);
  let avgFontSize = useRef(null);

  useLayoutEffect(() => {
    if (str.length <= 15) {
      maxFontSize.current = 100;
      avgFontSize.current = 4.5;
    } else if (15 < str.length < 25) {
      maxFontSize.current = 80;
      avgFontSize.current = 4;
    } else {
      maxFontSize.current = 60;
      avgFontSize.current = 3.5;
    }
  }, []);

  return [maxFontSize.current, avgFontSize.current];
};

export default useFontSize;
