import React from "react";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import styled from "styled-components";
import { TrackEntryComponentStyle } from "./ReusableStyleComponent";

const PlaceholderRow = styled.div.attrs({
  className: "ph-row",
})``;

const PlaceholderTrackEntryComponent = React.memo(() => {
  return (
    <TrackEntryComponentStyle skeleton="ph-item">
      <PlaceholderRow />
    </TrackEntryComponentStyle>
  );
});

export default PlaceholderTrackEntryComponent;
