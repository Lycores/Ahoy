import { useCallback } from "react";
import styled from "styled-components";
import "../../stylesheets/css/placeholderCardComponentStyleSheet.css";
import { TrackNameStyle } from "../ReusableStyleComp";
import { CardContainerStyle, CardCoverStyle } from "../ReusableStyleComp";
import { TopResultTitleStyle } from "../ReusableStyleComp";
import { useRecoilState } from "recoil";
import { deviceIdRecoil } from "../../recoilInfo";
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
const TracksResultComp = (props) => {
  let { possibleTracks } = props;
  let token = sessionStorage.getItem("token");
  let [deviceIdState, setDevicedIdState] = useRecoilState(deviceIdRecoil);

  console.log(possibleTracks);

  const playTrack = useCallback(
    (ps) => {
      let albumId = ps.album.id;
      let positionInAlbum = ps.track_number - 1;

      fetch(
        `/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}&token=${token}`
      );
    },
    [deviceIdState, token]
  );
  return possibleTracks.length > 1 ? (
    <SuggestionStyle>
      <TopResultTitleStyle>Possible Tracks</TopResultTitleStyle>

      <SuggestionContainer>
        {possibleTracks.map((ps, index) => {
          if (ps.album.images.length !== 0) {
            return (
              <LocalCardContainerStyle
                onClick={() => {
                  playTrack(ps);
                }}
                key={index}
              >
                <CardCoverStyle imageUrl={ps.album.images[1].url} />
                <TrackNameStyle>{ps.name}</TrackNameStyle>
              </LocalCardContainerStyle>
            );
          } else {
            return (
              <LocalCardContainerStyle
                onClick={() => {
                  playTrack(ps);
                }}
                key={index}
              >
                <CardCoverStyle imageUrl={ps.album.images[1].url} />
                <TrackNameStyle>{ps.name}</TrackNameStyle>
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

export default TracksResultComp;
