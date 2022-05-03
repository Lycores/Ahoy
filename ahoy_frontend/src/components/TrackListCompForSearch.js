import TrackEntryComp from "./TrackEntryComp";
import styled from "styled-components";
const TrackListCompForSearch = (props) => {
  let { topResultTracks } = props;

  if (topResultTracks.length != 0) {
    let tracks = topResultTracks;
    return tracks.map((track, index) => {
      return (
        <TrackEntryComp
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
    });
  } else {
    return <></>;
  }
};

export default TrackListCompForSearch;
