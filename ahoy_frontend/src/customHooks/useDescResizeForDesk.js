import useWindowSize from "./useWindowSize";
import { useLayoutEffect, useRef, useState, useEffect } from "react";
import useRerender from "./useRerender";

const breakPoint = 250;
const useDescResizeForDesk = () => {
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
  console.log(111111111);
  useEffect(() => {
    if (windowWidth != 0 && overviewCoverRef.current && descRef.current) {
      let coverWidth = overviewCoverRef.current.offsetWidth;
      console.log(coverWidth, breakPoint);
      if (coverWidth <= breakPoint) {
        //record the width of desc
        breakPointUsingJS.current = descRef.current;
        //if right now the width of desc is smaller and equal to threshold,
        if (descRef.current <= breakPointUsingJS.current) {
          // do this
          shouldJSEngage.current = true;
          descWidthStateForDesk.current = windowWidth - 320 - coverWidth;
          descWidthStateForMobile.current = windowWidth - coverWidth;
          forceUpdate();
        } else {
          shouldJSEngage.current = false;
          forceUpdate();
        }
      }
      // else {
      //   shouldJSEngage.current = false;
      //   forceUpdate();
      // }
    }
  }, [windowWidth]);

  return [
    overviewCoverRef,
    descRef,
    descWidthStateForDesk.current,
    descWidthStateForMobile.current,
    shouldJSEngage.current,
  ];
};

export default useDescResizeForDesk;
