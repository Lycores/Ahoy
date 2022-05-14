import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePause,
  faCirclePlay,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";

const PlaybackBarStyle = styled.div`
  width: 230px;
  height: var(--playback-bar-height-desktop);
  padding-top: var(--global-padding-for-card);
  padding-bottom: var(--global-padding-for-card);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
`;

const PlaybackBarCompForDesk = (props) => {
  let { isPaused = true, onBack, onPlay, onPause, onForward } = props;
  return (
    <PlaybackBarStyle>
      <FontAwesomeIcon
        icon={faBackwardStep}
        color="#1bd760"
        size="lg"
        style={{ cursor: "pointer", height: "30px" }}
        onClick={onBack}
      />
      {isPaused ? (
        <FontAwesomeIcon
          icon={faCirclePlay}
          color="#1bd760"
          size="lg"
          onClick={onPlay}
          style={{ cursor: "pointer", height: "40px" }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faCirclePause}
          color="#1bd760"
          size="lg"
          onClick={onPause}
          style={{ cursor: "pointer", height: "40px" }}
        />
      )}

      <FontAwesomeIcon
        icon={faForwardStep}
        color="#1bd760"
        size="lg"
        style={{ cursor: "pointer", height: "30px" }}
        onClick={onForward}
      />
    </PlaybackBarStyle>
  );
};

export default PlaybackBarCompForDesk;
