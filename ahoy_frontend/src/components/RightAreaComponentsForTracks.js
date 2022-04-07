import 'bootstrap/dist/css/bootstrap-grid.css';
import TrackListComponent from './TrackListComponent'


function RightAreaComponentForTracks(props) {
    console.log("device id are")
    var {album, deviceId} = props
    console.log(deviceId)
    // var {tracks, trackCover, setTrack} = props
    var tracks = album.tracks.items
    console.log(tracks)

    return(
        <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
            {
                tracks.map((track, index)=> {
                    return (
                        
                        // <TrackListComponent key={index}  track={track} deviceId={deviceId}/>
                        <TrackListComponent key={index} track={track} albumId={album.id} positionInAlbum={index} deviceId={deviceId}/>
                    )
                })
            }
        </div>
        
    )
    
}

export default RightAreaComponentForTracks