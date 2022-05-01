import { useLocation } from "react-router-dom";
import { RightAreaStyleForDesktopOrTablet } from "../components/ReusableStyleComp";
import styled from "styled-components";
import { CardCoverStyle } from "../components/ReusableStyleComp";
import "../stylesheets/css/placeholderCardComponentStyleSheet.css";
import useSearchPage from "../customHooks/useSearchPage";
// const HorizontalCardContainer = styled.div`
//   display: flex;
//   border-radius: var(--global-border-radius);
//   box-shadow: var(--global-box-shadow);
//   flex-wrap: nowrap;
// `;

const TopResultContainerStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  margin-top: 80px;
`;

const TopResultTitleStyle = styled.div``;
const TopResultCardAreaStyle = styled.div`
  margin-right: var(--global-margin);
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
  display: flex;
  flex-wrap: nowrap;
`;

const TopResultTrackAreaStyle = styled.div`
  box-shadow: var(--global-box-shadow);
  border-radius: var(--global-border-radius);
`;

//inheritance, so no need to give skeleton and imageUrl
const LocalCardCoverStyle = styled(CardCoverStyle)`
  margin: 10px;
`;

const LocalDescriptionStyle = styled.div`
  min-width: 200px;
  width: 200px;
`;

const SearchPage = () => {
  let { state } = useLocation();
  let result = null;
  let query = null;
  if (state) {
    result = state.result;
    query = state.query;

    console.log(111111, result);
    console.log(query);
  }

  let [topResultObj, typeOfResult] = useSearchPage(result, query);
  return (
    <RightAreaStyleForDesktopOrTablet>
      <TopResultContainerStyle>
        <div>
          <TopResultTitleStyle>{typeOfResult}</TopResultTitleStyle>
          <TopResultCardAreaStyle>
            {topResultObj ? (
              <>
                <LocalCardCoverStyle imageUrl={topResultObj.images[1].url} />
                <LocalDescriptionStyle>
                  {topResultObj.name}
                </LocalDescriptionStyle>
              </>
            ) : (
              <>
                <LocalCardCoverStyle skeleton="ph-item" />
              </>
            )}
          </TopResultCardAreaStyle>
        </div>

        <TopResultTrackAreaStyle></TopResultTrackAreaStyle>
      </TopResultContainerStyle>
    </RightAreaStyleForDesktopOrTablet>
  );
};

export default SearchPage;
