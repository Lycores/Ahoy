import useWindowSize from "./useWindowSize";
import { useLayoutEffect, useRef, useState } from "react";

const useDescResizeForDesk = () => {
  let [windowWidth, windowHeight] = useWindowSize();
  let overviewCoverRef = useRef(null);
  let [descWidthState, setDescWidthState] = useState([0, 0]);

  useLayoutEffect(() => {
    if (windowWidth != 0 && overviewCoverRef.current) {
      let coverWidth = overviewCoverRef.current.offsetWidth;
      let descWidth = [
        windowWidth - 320 - coverWidth,
        windowWidth - coverWidth,
      ];
      console.log(descWidth);
      setDescWidthState(descWidth);
    }
  }, [windowWidth]);

  return [overviewCoverRef, descWidthState[0], descWidthState[1]];
};

export default useDescResizeForDesk;
