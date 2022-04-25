import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import React from "react";
import {
  CardContainerStyle,
  GridSpaceStyle,
  CardCoverStyle,
} from "./ReusableStyleComponent";
const PlaceholderCardComponent = React.memo(() => {
  return (
    <GridSpaceStyle>
      <CardContainerStyle>
        <CardCoverStyle skeleton="ph-item" />
      </CardContainerStyle>
    </GridSpaceStyle>
  );
});

export default PlaceholderCardComponent;
