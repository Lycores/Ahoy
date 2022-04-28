import React, { forwardRef } from "react";
import { deviceIdRecoil } from "../recoilInfo";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { TrackEntryComponentStyle } from "./ReusableStyleComp";

const TrackImageStyle = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 10px;
  background-image: url(${(props) => props.trackImage});
`;

const TrackInfoContainerStyle = styled.div`
  margin-left: 20px;
`;
const TracktitleStyle = styled.div`
  font-size: 22px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TrackArtistStyle = styled.div`
  font-size: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: table-cell;
  vertical-align: bottom;
`;

const TrackNumberArea = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
`;

const TrackEntryComp = React.forwardRef((props, ref) => {
  const { position, track, albumId, positionInAlbum, images, showImage } =
    props;
  const deviceIdState = useRecoilValue(deviceIdRecoil);

  const playTrack = () => {
    return () => {
      fetch(
        `/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}`
      );
    };
  };

  return (
    <TrackEntryComponentStyle ref={ref} onClick={playTrack()}>
      <TrackNumberArea>{position}</TrackNumberArea>
      {showImage ? <TrackImageStyle trackImage={images[2].url} /> : <></>}
      <TrackInfoContainerStyle>
        <TracktitleStyle>{track.name}</TracktitleStyle>
        <TrackArtistStyle>{track.artists[0].name}</TrackArtistStyle>
      </TrackInfoContainerStyle>
    </TrackEntryComponentStyle>
  );
});

export default React.memo(TrackEntryComp);
