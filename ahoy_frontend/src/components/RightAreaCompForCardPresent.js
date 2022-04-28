import "bootstrap/dist/css/bootstrap-grid.css";
import UniversalCardComp from "./UniversalCardComp";
import PlaceholderCardComp from "./PlaceholderCardComp";
import React from "react";
import styled from "styled-components";
import { RightAreaContainerStyle, GridStyle } from "./ReusableStyleComp";

const RightAreaCompForCardPresent = React.memo((props) => {
  var { itemList, type } = props;

  if (itemList.length == 0) {
    return (
      <RightAreaContainerStyle>
        <GridStyle>
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
          <PlaceholderCardComp />
        </GridStyle>
      </RightAreaContainerStyle>
    );
  } else {
    return (
      <RightAreaContainerStyle>
        <GridStyle>
          {itemList.map((item, index) => {
            return <UniversalCardComp key={index} item={item} type={type} />;
          })}
        </GridStyle>
      </RightAreaContainerStyle>
    );
  }
});

export default RightAreaCompForCardPresent;
