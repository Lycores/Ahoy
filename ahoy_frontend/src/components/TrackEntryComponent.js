import React, {useEffect} from 'react'
import {trackEntryComponentStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
import {deviceIdRecoil} from '../recoilInfo'
import {useRecoilValue} from 'recoil'
import globalStyle from '../stylesheets/globalStyle/globalStyleSheet'
function TrackEntryComponent(props){
    const {track, albumId, positionInAlbum, images} = props
    console.log(images[2])
    const deviceIdState =  useRecoilValue(deviceIdRecoil)

    const playTrack = () => {
        return () => {
            fetch(`/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}`)
        }
    }

    return (
        <div style={trackEntryComponentStyle} onClick={playTrack()} >
            <div style={{height:'50px', width:'50px', borderRadius: '10px', backgroundImage:`url(${images[2].url})`}}/>
            <div style={{marginLeft:'20px'}}>
                <div style={{fontSize:'22px', whiteSpace:'nowrap', textOverflow:'ellipsis'}}>{track.name}</div>
                <div style={{fontSize:'16px', whiteSpace:'nowrap', textOverflow:'ellipsis', display:'table-cell', verticalAlign:'bottom'}}>{track.artists[0].name}</div>
            </div>
            
        </div>
    )
}

export default React.memo(TrackEntryComponent)