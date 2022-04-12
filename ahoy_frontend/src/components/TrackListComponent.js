import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import TrackEntryComponent from './TrackEntryComponent'
import {styleForTrackContainer} from  '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
function TrackListComponent(props){
    var {album, deviceId, artistTopTrack} = props
    console.log('TrackListComponent', deviceId)
    // if(album){
    //     var tracks = album.tracks.items
    // }
    // if(artistTopTrack){
    //     console.log(artistTopTrack)
    //     var tracks = artistTopTrack.tracks
    // }
    
    

    if(album){
        var tracks = album.tracks.items
        return (
            <div style={styleForTrackContainer}>
                {
                    tracks.map((track, index)=> {
                        return (
                            <TrackEntryComponent key={index} track={track} albumId={album.id} positionInAlbum={index} deviceId={deviceId}/>
                        )
                    })
                }
            </div>
        )
    }else if(artistTopTrack){
        console.log(artistTopTrack)
        var tracks = artistTopTrack.tracks
        return(
            <div style={styleForTrackContainer}>
                {
                    tracks.map((track, index)=> {
                        return (
                            <TrackEntryComponent key={index} track={track} albumId={track.album.id} positionInAlbum={track.track_number-1} deviceId={deviceId}/>
                        )
                    })
                }
            </div>
        )
    }else{
        return(
            <></>
        )
    }
    
}

export default TrackListComponent

