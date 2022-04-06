import 'bootstrap/dist/css/bootstrap-grid.css';
import TrackListComponent from './TrackListComponent'


function RightAreaComponentForTracks(props) {
    console.log("props are")
    
    var {tracks, trackCover} = props
    console.log(tracks)
    console.log(trackCover)

    return(
        <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
            {
                tracks.map((track, index)=> {
                    return (
                        // <TrackListComponent key={index} trackName={track.name} artists={track.artists[0].name} />
                        <TrackListComponent key={index} track={track} trackCover={trackCover} />
                    )
                })
            }
        </div>
        
    )
    
}

export default RightAreaComponentForTracks