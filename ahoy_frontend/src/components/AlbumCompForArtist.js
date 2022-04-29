import React from "react";
import RightAreaCompForCardPresent from "./RightAreaCompForCardPresent";
import PlaceholderCardComp from "./PlaceholderCardComp";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import styled from "styled-components";
import { GridStyle, RightAreaContainerStyle } from "./ReusableStyleComp";

const CommonContainer = styled.div`
  margin: var(--global-margin);
  border-radius: var(--global-border-radius);
  box-shadow: var(--global-box-shadow);
`;

var increaseKey = 999;
const AlbumCompForArtist = React.memo((props) => {
  let { artistAlbums, getArtistAlbums } = props;
  let renderQueue = [];

  if (artistAlbums) {
    renderQueue.push(
      <CommonContainer key={increaseKey + 1}>
        <RightAreaCompForCardPresent
          itemList={artistAlbums}
          getMoreItems={getArtistAlbums}
          type="album"
        />
      </CommonContainer>
    );
    increaseKey++;
  } else {
    renderQueue.push(
      <CommonContainer key={increaseKey + 1}>
        <RightAreaContainerStyle>
          <GridStyle>
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
            <PlaceholderCardComp />
          </GridStyle>
        </RightAreaContainerStyle>
      </CommonContainer>
    );
    increaseKey++;
  }
  return renderQueue;
});

export default AlbumCompForArtist;
