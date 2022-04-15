import React, {useEffect} from 'react'
import {trackEntryComponentStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
import {deviceIdRecoil} from '../recoilInfo'
import {useRecoilValue} from 'recoil'
function TrackEntryComponent(props){
    const {track, albumId, positionInAlbum} = props
    const deviceIdState =  useRecoilValue(deviceIdRecoil)

    const playTrack = () => {
        return () => {
            fetch(`/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}`)
        }
    }

    return (
        <div style={trackEntryComponentStyle} onClick={playTrack()} >
            <span style={{display:'block'}}>{track.name}</span>
            <span style={{display:'block'}}>{track.artists[0].name}</span>
        </div>
    )
}

export default React.memo(TrackEntryComponent)