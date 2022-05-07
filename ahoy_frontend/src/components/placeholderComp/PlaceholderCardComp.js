import "../../stylesheets/css/placeholderCardComponentStyleSheet.css";
import React from "react";
import styled from "styled-components";
import {
  CardContainerStyle,
  GridSpaceStyle,
  CardCoverStyle,
} from "../ReusableStyleComp";

const LocalCardContainerStyle = styled(CardContainerStyle)`
  &:hover {
    background-color: var(--global-background-color);
  }
`;
const PlaceholderCardComp = React.memo(() => {
  return (
    <GridSpaceStyle>
      <LocalCardContainerStyle>
        <CardCoverStyle skeleton="ph-item" />
      </LocalCardContainerStyle>
    </GridSpaceStyle>
  );
});

export default PlaceholderCardComp;
