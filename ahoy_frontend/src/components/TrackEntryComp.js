import React, { forwardRef, useCallback } from "react";
import { deviceIdRecoil } from "../recoilInfo";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { TrackEntryComponentStyle } from "./ReusableStyleComp";

const TrackImageStyle = styled.div`
  height: 50px;
  width: 50px;
  min-width: 50px;
  border-radius: 5px;
  background-image: url(${(props) => props.trackImage});
`;

const TrackInfoContainerStyle = styled.div`
  margin-left: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const TrackTitleStyle = styled.div`
  font-size: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const TrackArtistStyle = styled.div`
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: table-cell;
  vertical-align: bottom;
  text-overflow: ellipsis;
`;

const TrackNumberArea = styled.div`
  width: 50px;
  min-width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

const TrackEntryComp = React.forwardRef((props, ref) => {
  let {
    width,
    number,
    track,
    albumId,
    positionInAlbum,
    images,
    showImage,
    showNumber,
  } = props;
  let deviceIdState = useRecoilValue(deviceIdRecoil);

  let token = sessionStorage.getItem("token");
  const playTrack = useCallback(() => {
    fetch(
      `/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}&token=${token}`
    );
  }, [albumId, positionInAlbum, deviceIdState, token]);

  return (
    <TrackEntryComponentStyle width={width} ref={ref} onClick={playTrack}>
      {showNumber && <TrackNumberArea>{number}</TrackNumberArea>}
      {showImage && <TrackImageStyle trackImage={images[2].url} />}
      <TrackInfoContainerStyle>
        <TrackTitleStyle>{track.name}</TrackTitleStyle>
        <TrackArtistStyle>{track.artists[0].name}</TrackArtistStyle>
      </TrackInfoContainerStyle>
    </TrackEntryComponentStyle>
  );
});

export default React.memo(TrackEntryComp);
