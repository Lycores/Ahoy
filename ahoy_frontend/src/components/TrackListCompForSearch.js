import TrackEntryComp from "./TrackEntryComp";
import styled from "styled-components";

const TrackListContainer = styled.div``;
const TrackListCompForSearch = (props) => {
  let { width, topResultTracks } = props;

  if (topResultTracks.length != 0) {
    let tracks = topResultTracks;
    return (
      <TrackListContainer>
        {tracks.map((track, index) => {
          return (
            <TrackEntryComp
              width={width - 20}
              key={index}
              number={index + 1}
              track={track}
              albumId={track.album.id}
              positionInAlbum={track.track_number - 1}
              images={track.album.images}
              showImage={true}
              showNumber={false}
            />
          );
        })}
      </TrackListContainer>
    );
  } else {
    return <></>;
  }
};

export default TrackListCompForSearch;
