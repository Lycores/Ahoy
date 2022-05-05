import { useLayoutEffect, useRef } from "react";

const useCoverSize = (str) => {
  let maxCoverSize = useRef(null);
  let avgCoverSize = useRef(null);

  useLayoutEffect(() => {
    if (str.length <= 15) {
      maxCoverSize.current = 300;
      avgCoverSize.current = 25;
    } else if (15 < str.length < 25) {
      maxCoverSize.current = 210;
      avgCoverSize.current = 20;
    } else {
      maxCoverSize.current = 200;
      avgCoverSize.current = 20;
    }
  }, []);

  return [maxCoverSize.current, avgCoverSize.current];
};

export default useCoverSize;
