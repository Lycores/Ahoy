import "bootstrap/dist/css/bootstrap-grid.css";
import UniversalCardComponent from "./UniversalCardComponent";
import PlaceholderCardComponent from "./PlaceholderCardComponent";
import React from "react";
import styled from "styled-components";
import { RightAreaContainerStyle, GridStyle } from "./ReusableStyleComponent";

const RightAreaComponentForCardPresent = React.memo((props) => {
  var { itemList, type } = props;

  if (itemList.length == 0) {
    return (
      <RightAreaContainerStyle>
        <GridStyle>
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
          <PlaceholderCardComponent />
        </GridStyle>
      </RightAreaContainerStyle>
    );
  } else {
    return (
      <RightAreaContainerStyle>
        <GridStyle>
          {itemList.map((item, index) => {
            return (
              <UniversalCardComponent key={index} item={item} type={type} />
            );
          })}
        </GridStyle>
      </RightAreaContainerStyle>
    );
  }
});

export default RightAreaComponentForCardPresent;
