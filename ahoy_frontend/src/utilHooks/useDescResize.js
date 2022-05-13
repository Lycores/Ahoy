import useWindowSize from "./useWindowSize";
import { useLayoutEffect, useRef } from "react";
import useRerender from "./useRerender";

const breakPoint = 250;
const useDescResize = () => {
  let [windowWidth, windowHeight] = useWindowSize();
  let overviewCoverRef = useRef(null);
  let descRef = useRef(null);
  let breakPointUsingJS = useRef(0);
  let shouldJSEngage = useRef(false);
  let descWidthStateForDesk = useRef(0);
  let descWidthStateForMobile = useRef(0);
  let trackListWidthStateForDesk = useRef(0);
  let trackListWidthStateForMobile = useRef(0);
  let [forceUpdate] = useRerender();
  let firstRecord = useRef(true);

  useLayoutEffect(() => {
    if (windowWidth !== 0 && overviewCoverRef.current && descRef.current) {
      let coverWidth = overviewCoverRef.current.offsetWidth;

      if (coverWidth <= breakPoint) {
        //record the width of desc
        if (firstRecord.current) {
          breakPointUsingJS.current = descRef.current;
          firstRecord.current = false;
        }

        //if right now the width of desc is smaller and equal to threshold,
        if (descRef.current <= breakPointUsingJS.current) {
          // do this
          shouldJSEngage.current = true;
          descWidthStateForDesk.current = windowWidth - 320 - coverWidth;
          descWidthStateForMobile.current = windowWidth - coverWidth - 60;
        } else {
          shouldJSEngage.current = false;
        }
      } else {
        shouldJSEngage.current = false;
      }
      trackListWidthStateForDesk.current = windowWidth - 300;
      trackListWidthStateForMobile.current = windowWidth - 20;
      forceUpdate();
    }
  }, [windowWidth]);

  return [
    overviewCoverRef,
    descRef,
    descWidthStateForDesk.current,
    descWidthStateForMobile.current,
    trackListWidthStateForDesk.current,
    trackListWidthStateForMobile.current,
    shouldJSEngage.current,
  ];
};

export default useDescResize;
