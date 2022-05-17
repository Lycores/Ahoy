import styled from "styled-components";
import "../../stylesheets/css/placeholderCardComponentStyleSheet.css";
import { ArtistsNameStyle } from "../ReusableStyleComp";
import { CardContainerStyle, CardCoverStyle } from "../ReusableStyleComp";
import { TopResultTitleStyle } from "../ReusableStyleComp";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const LocalCardContainerStyle = styled(CardContainerStyle)`
  margin: 0px;
  margin-top: 20px;
  margin-bottom: 20px;
  &:hover {
    background-color: var(--hover-color);
  }
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
  let { possibleArtists } = props;
  const navigate = useNavigate();

  const goToArtistPage = useCallback((ps) => {
    navigate("/traditional/artists", {
      state: {
        artist: ps,
      },
    });
  }, []);

  return possibleArtists.length > 1 ? (
    <SuggestionStyle>
      <TopResultTitleStyle>Possible Artists</TopResultTitleStyle>

      <SuggestionContainer>
        {possibleArtists.map((ps, index) => {
          if (ps.images.length !== 0) {
            return (
              <LocalCardContainerStyle
                onClick={() => {
                  goToArtistPage(ps);
                }}
                key={index}
              >
                <CardCoverStyle imageUrl={ps.images[1].url} />
                <ArtistsNameStyle>{ps.name}</ArtistsNameStyle>
              </LocalCardContainerStyle>
            );
          }
        })}
      </SuggestionContainer>
    </SuggestionStyle>
  ) : (
    <></>
  );
};

export default ArtistsResultComp;
