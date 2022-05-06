import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CardCoverStyle } from "../ReusableStyleComp";
const TopResultForResult = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(50% - calc(var(--global-margin) / 2));
  height: 100%;
  cursor: pointer;
`;

const TopResultTitleStyle = styled.div``;
const TopResultCardAreaStyle = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  display: flex;
  flex-wrap: nowrap;
  margin-top: var(--global-margin);
  padding: var(--global-padding);
  height: 100%;
`;

const TypeInfoStyle = styled.div`
  height: 60px;
`;

//inheritance, so no need to give skeleton and imageUrl
const LocalCardCoverStyle = styled(CardCoverStyle)``;

const TitleStyle = styled.div`
  margin-left: 10px;
  font-size: 50px;
  margin-top: clamp(50px, 10vw, 120px);
  text-align: left;
  font-size: clamp(40px, 4vw, 50px);
`;
const TopResultLeft = React.forwardRef((props, topResultCardRef) => {
  let { topResultObj, typeOfResult } = props;
  let navigate = useNavigate();
  const goToResultPage = useCallback(() => {
    if (topResultObj && typeOfResult == "artists") {
      navigate("/traditional/artists", {
        state: {
          artist: topResultObj,
        },
      });
    }
  }, [topResultObj, typeOfResult]);
  return (
    <TopResultForResult ref={topResultCardRef} onClick={goToResultPage}>
      <TopResultTitleStyle>Top Result</TopResultTitleStyle>
      <TopResultCardAreaStyle>
        {topResultObj ? (
          <>
            <div>
              {typeOfResult === "artists" ? (
                <>
                  {topResultObj.images.length === 0 ? (
                    <LocalCardCoverStyle />
                  ) : (
                    <LocalCardCoverStyle
                      imageUrl={topResultObj.images[1].url}
                    />
                  )}
                  <TypeInfoStyle>{typeOfResult}</TypeInfoStyle>
                </>
              ) : (
                <>
                  {typeOfResult === "tracks" ? (
                    <>
                      {topResultObj.album.images.length === 0 ? (
                        <LocalCardCoverStyle />
                      ) : (
                        <LocalCardCoverStyle
                          imageUrl={topResultObj.album.images[1].url}
                        />
                      )}
                      <TypeInfoStyle>{typeOfResult}</TypeInfoStyle>
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </div>
            <TitleStyle>{topResultObj.name}</TitleStyle>
          </>
        ) : (
          <>
            <LocalCardCoverStyle skeleton="ph-item" />
          </>
        )}
      </TopResultCardAreaStyle>
    </TopResultForResult>
  );
});

export default TopResultLeft;
