import styled from "styled-components";
import "../../stylesheets/css/placeholderCardComponentStyleSheet.css";
import { ArtistsNameStyle } from "../ReusableStyleComp";
import { CardContainerStyle, CardCoverStyle } from "../ReusableStyleComp";
import { TopResultTitleStyle } from "../ReusableStyleComp";

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
  margin-top: 10px;
`;

const SuggestionStyle = styled.div`
  margin: 10px;
`;
const ArtistsResultComp = (props) => {
  let { possibleResults } = props;
  return (
    <SuggestionStyle>
      <TopResultTitleStyle>Artists</TopResultTitleStyle>

      <SuggestionContainer>
        {possibleResults.length != 0 ? (
          possibleResults["artists"].items.map((ps, index) => {
            if (ps.images.length != 0) {
              return (
                <LocalCardContainerStyle key={index}>
                  <CardCoverStyle imageUrl={ps.images[1].url} />
                  <ArtistsNameStyle>{ps.name}</ArtistsNameStyle>
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

export default ArtistsResultComp;
