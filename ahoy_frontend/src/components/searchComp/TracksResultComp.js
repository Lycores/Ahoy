import styled from "styled-components";
import "../../stylesheets/css/placeholderCardComponentStyleSheet.css";

import { CardContainerStyle, CardCoverStyle } from "../ReusableStyleComp";

const TopResultTitleStyle = styled.div``;

const LocalCardContainerStyle = styled(CardContainerStyle)`
  margin: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  /* flex-shrink: 0; */
`;

const SuggestionContainer = styled.div`
  border-radius: var(--global-border-radius);
  box-shadow: var(--global-box-shadow);
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-wrap: wrap;
  height: 340px;
  overflow-y: hidden;
  justify-content: space-around;
`;

const SuggestionStyle = styled.div`
  margin: 10px;
`;
const TracksResultComp = (props) => {
  let { possibleResults } = props;
  return (
    <SuggestionStyle>
      <TopResultTitleStyle>Tracks</TopResultTitleStyle>

      <SuggestionContainer>
        {possibleResults.length != 0 ? (
          possibleResults["tracks"].items.map((ps, index) => {
            if (ps.album.images.length != 0) {
              return (
                <LocalCardContainerStyle key={index}>
                  <CardCoverStyle imageUrl={ps.album.images[1].url} />
                  <div>{ps.name}</div>
                </LocalCardContainerStyle>
              );
            } else {
              return <></>;
            }
          })
        ) : (
          <></>
        )}
      </SuggestionContainer>
    </SuggestionStyle>
  );
};

export default TracksResultComp;
