import "../../stylesheets/css/placeholderCardComponentStyleSheet.css";
import React from "react";
import {
  CardContainerStyle,
  GridSpaceStyle,
  CardCoverStyle,
} from "../ReusableStyleComp";
const PlaceholderCardComp = React.memo(() => {
  return (
    <GridSpaceStyle>
      <CardContainerStyle>
        <CardCoverStyle skeleton="ph-item" />
      </CardContainerStyle>
    </GridSpaceStyle>
  );
});

export default PlaceholderCardComp;
