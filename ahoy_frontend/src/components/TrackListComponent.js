import {useEffect} from 'react'
import trackListComponentStyle from '../stylesheets/trackListStyleSheet'

function TrackListComponent(props){
    const {track, albumId, positionInAlbum, deviceId} = props

    const playTrack = () => {
        return () => {
            fetch(`/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceId}`)
        }
    }

    return (
        <div style={trackListComponentStyle} onClick={playTrack()} >
            <span style={{display:'block'}}>{track.name}</span>
            <span style={{display:'block'}}>{track.artists[0].name}</span>
        </div>
    )
}

export default TrackListComponent