import {useEffect} from 'react'
import {trackEntryComponentStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'

function TrackEntryComponent(props){
    const {track, albumId, positionInAlbum, deviceId} = props

    const playTrack = () => {
        return () => {
            fetch(`/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceId}`)
        }
    }

    return (
        <div style={trackEntryComponentStyle} onClick={playTrack()} >
            <span style={{display:'block'}}>{track.name}</span>
            <span style={{display:'block'}}>{track.artists[0].name}</span>
        </div>
    )
}

export default TrackEntryComponent