import 'bootstrap/dist/css/bootstrap-grid.css';
import TrackListComponent from './TrackListComponent'


function RightAreaComponentForTracks(props) {
    console.log("props are")
    var {album, setModifiedTrack} = props
    // var {tracks, trackCover, setTrack} = props
    var tracks = album.tracks.items
    console.log(tracks)

    return(
        <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
            {
                tracks.map((track, index)=> {
                    return (
                        // <TrackListComponent key={index} trackName={track.name} artists={track.artists[0].name} />
                        <TrackListComponent key={index} track={track} album={album} setModifiedTrack={setModifiedTrack}/>
                    )
                })
            }
        </div>
        
    )
    
}

export default RightAreaComponentForTracks