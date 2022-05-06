import { useLayoutEffect, useRef } from "react";
import useRerender from "./useRerender";
import useWindowSize from "./useWindowSize";
import { useCallback } from "react";

const useTopTrackResize = () => {
  let topResultCardRef = useRef(null);
  let topResultTracksRef = useRef(null);
  let outerWrapperRef = useRef(null);
  let topTracksWidthForDesk = useRef(null);
  let topTracksWidthForMobile = useRef(null);
  let shouldJSEngage = useRef(false);
  let firstTime = useRef(true);
  let breakpointWidth = useRef(920);
  let [windowWidth, windowHeight] = useWindowSize();

  let [forceUpdate] = useRerender();

  const areTopResultElementsParallel = useCallback((ele1, ele2) => {
    let toTop1 = ele1.getBoundingClientRect().top;
    let toTop2 = ele2.getBoundingClientRect().top;

    if (toTop1 === toTop2) {
      return true;
    } else {
      return false;
    }
  }, []);

  const recordBreakpoint = useCallback(() => {
    breakpointWidth.current = outerWrapperRef.current.offsetWidth;
  }, [outerWrapperRef]);

  useLayoutEffect(() => {
    if (
      windowWidth != 0 &&
      topResultCardRef.current &&
      topResultTracksRef.current
    ) {
      if (
        areTopResultElementsParallel(
          topResultCardRef.current,
          topResultTracksRef.current
        ) ||
        outerWrapperRef.current.offsetWidth >= breakpointWidth.current
      ) {
        shouldJSEngage.current = false;
      } else {
        if (firstTime.current) {
          recordBreakpoint();
          firstTime.current = false;
        }
        shouldJSEngage.current = true;

        topTracksWidthForDesk.current = windowWidth - 310;
        topTracksWidthForMobile.current = windowWidth - 40;
      }

      forceUpdate();
    }
  }, [windowWidth]);

  return [
    shouldJSEngage.current,
    topResultCardRef,
    topResultTracksRef,
    outerWrapperRef,
    topTracksWidthForDesk.current,
    topTracksWidthForMobile.current,
  ];
};

export default useTopTrackResize;
