import "bootstrap/dist/css/bootstrap-grid.css";
import UniversalCardComp from "./UniversalCardComp";
import PlaceholderCardComp from "./PlaceholderCardComp";
import React, { useRef } from "react";
import styled from "styled-components";
import { RightAreaContainerStyle, GridStyle } from "./ReusableStyleComp";

const RightAreaCompForCardPresent = React.memo((props) => {
  let { itemList, getMoreItems, type } = props;
  let observer = useRef();
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
    let ItemsLen = itemList.length;

    return (
      <RightAreaContainerStyle>
        <GridStyle>
          {itemList.map((item, index) => {
            if (index + 1 == ItemsLen) {
              return (
                <UniversalCardComp
                  ref={(node) => {
                    if (observer.current) {
                      observer.current.disconnect();
                    }
                    observer.current = new IntersectionObserver((entries) => {
                      if (entries[0].isIntersecting) {
                        console.log(entries[0]);
                        getMoreItems();
                      }
                    });
                    if (node) {
                      console.log(node);
                      observer.current.observe(node);
                    }
                  }}
                  key={index}
                  item={item}
                  type={type}
                />
              );
            } else {
              return <UniversalCardComp key={index} item={item} type={type} />;
            }
          })}
        </GridStyle>
      </RightAreaContainerStyle>
    );
  }
});

export default RightAreaCompForCardPresent;
