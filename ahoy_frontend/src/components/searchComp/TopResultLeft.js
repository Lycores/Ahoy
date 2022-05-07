import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CardCoverStyle } from "../ReusableStyleComp";
import { TopResultTitleStyle } from "../ReusableStyleComp";
const TopResultForResult = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: calc(50% - calc(var(--global-margin) / 2));
  cursor: pointer;
`;

const TopResultCardAreaStyle = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  display: flex;
  flex-wrap: nowrap;
  margin-top: var(--global-margin);
  padding: var(--global-padding);
  height: 240px;
  overflow: hidden;
  &:hover {
    background-color: var(--hover-color);
  }
`;

const TypeInfoStyle = styled.div`
  height: 60px;
`;

//inheritance, so no need to give skeleton and imageUrl
const LocalCardCoverStyle = styled(CardCoverStyle)`
  box-shadow: "";
`;

const TitleStyle = styled.div`
  margin-left: 10px;
  margin-top: clamp(20px, 5vw, 120px);
  text-align: left;
  font-size: clamp(20px, 3.5vw, 45px);
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
      <TopResultTitleStyle>
        {typeOfResult
          ? typeOfResult.charAt(0).toUpperCase() +
            typeOfResult.substring(1, typeOfResult.length + 1)
          : ""}
      </TopResultTitleStyle>
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
