import 'bootstrap/dist/css/bootstrap-grid.css';
import TrackListComponent from './TrackListComponent'


function RightAreaComponentForTracks(props) {
    var {tracks} = props
    console.log(111)
    console.log(tracks)

    return(
        <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
            {
                tracks.map((track, index)=> {
                    return (
                        <TrackListComponent key={index} trackName={track.name} artists={track.artists[0].name} />
                    )
                })
            }
        </div>
        
    )
    
}

export default RightAreaComponentForTracks