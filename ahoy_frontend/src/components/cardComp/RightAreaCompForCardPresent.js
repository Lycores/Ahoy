import "bootstrap/dist/css/bootstrap-grid.css";
import UniversalCardComp from "./UniversalCardComp";
import PlaceholderCardComp from "../placeholderComp/PlaceholderCardComp";
import React, { useCallback, useRef } from "react";
import { RightAreaContainerStyle, GridStyle } from "../ReusableStyleComp";

const RightAreaCompForCardPresent = React.memo((props) => {
  let { itemList, getMoreItems, type } = props;
  let observer = useRef();

  let lastElement = useCallback(
    (node) => {
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          getMoreItems();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [observer]
  );

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
                  ref={lastElement}
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
