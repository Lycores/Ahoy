import { useLayoutEffect, useRef } from "react";
import useRerender from "../customHooks/useRerender";
import useWindowSize from "./useWindowSize";
import { useCallback } from "react";

const useTopTrackResize = () => {
  let topResultCardRef = useRef(null);
  let topResultTracksRef = useRef(null);
  let topTracksWidthForDesk = useRef(null);
  let topTracksWidthForMobile = useRef(null);
  let shouldJSEngage = useRef(false);
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
        )
      ) {
        shouldJSEngage.current = false;
      } else {
        shouldJSEngage.current = true;
        // topTracksWidthForDesk.current = windowWidth - 300;
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
    topTracksWidthForDesk.current,
    topTracksWidthForMobile.current,
  ];
};

export default useTopTrackResize;
