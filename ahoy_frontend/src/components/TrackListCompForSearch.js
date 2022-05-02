import TrackEntryComp from "./TrackEntryComp";

const TrackListCompForSearch = (props) => {
  let { topResultTracks } = props;

  let renderQueue = [];
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
          showImage={false}
        />
      );
    });
  } else {
    return <></>;
  }
};

export default TrackListCompForSearch;
