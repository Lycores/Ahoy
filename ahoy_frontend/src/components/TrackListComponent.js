import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import TrackEntryComponent from './TrackEntryComponent'
import {styleForTrackContainer} from  '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
function TrackListComponent(props){
    var {album, deviceId} = props
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
}

export default TrackListComponent

