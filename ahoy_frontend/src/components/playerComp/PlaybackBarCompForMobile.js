import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

const PlaybackBarStyle = styled.div`
  flex-grow: 1;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const PlaybackBarCompForMobile = (props) => {
  let { isPaused = true, onBack, onPlay, onPause, onForward } = props;

  return (
    <PlaybackBarStyle>
      <FontAwesomeIcon
        icon={faBackwardStep}
        color="#1bd760"
        // size="2x"
        style={{ cursor: "pointer", height: "30px" }}
        onClick={onBack}
      />
      {isPaused ? (
        <FontAwesomeIcon
          icon={faCirclePlay}
          color="#1bd760"
          // size="3x"
          onClick={onPlay}
          style={{ cursor: "pointer", height: "40px" }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faCirclePause}
          color="#1bd760"
          // size="3x"
          onClick={onPause}
          style={{ cursor: "pointer", height: "40px" }}
        />
      )}

      <FontAwesomeIcon
        icon={faForwardStep}
        color="#1bd760"
        size="2x"
        style={{ cursor: "pointer", height: "30px" }}
        onClick={onForward}
      />
    </PlaybackBarStyle>
  );
};

export default PlaybackBarCompForMobile;
