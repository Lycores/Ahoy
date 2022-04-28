import React from "react";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import styled from "styled-components";
import { TrackEntryComponentStyle } from "./ReusableStyleComp";

const PlaceholderRow = styled.div.attrs({
  className: "ph-row",
})``;

const PlaceholderTrackEntryComp = React.memo(() => {
  return (
    <TrackEntryComponentStyle skeleton="ph-item">
      <PlaceholderRow />
    </TrackEntryComponentStyle>
  );
});

export default PlaceholderTrackEntryComp;
