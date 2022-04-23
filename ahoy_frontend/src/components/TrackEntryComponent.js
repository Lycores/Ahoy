import React, {useEffect} from 'react'
import {trackEntryComponentStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
import {deviceIdRecoil} from '../recoilInfo'
import {useRecoilValue} from 'recoil'
import globalStyle from '../stylesheets/globalStyle/globalStyleSheet'
import styled from 'styled-components'

const TrackEntryComponentStyle = styled.div`
    margin: var(--global-margin);
    height: 50px;
    border-radius: var(--global-border-radius);
    cursor: pointer;
    display: flex;
`

const TrackImageStyle = styled.div`
    height:50px; 
    width:50px; 
    border-radius: 10px;
    background-image: url(${props=>props.trackImage});
`

const TrackInfoContainerStyle = styled.div`
    margin-left:20px;
`
const TracktitleStyle = styled.div`
    font-size:22px;
    white-space:nowrap; 
    text-overflow:ellipsis;
`

const TrackArtistStyle = styled.div`
    font-size:16px;
    white-space:nowrap; 
    text-overflow:ellipsis; 
    display:table-cell; 
    vertical-align:bottom;
`

function TrackEntryComponent(props){
    const {track, albumId, positionInAlbum, images} = props
    const deviceIdState =  useRecoilValue(deviceIdRecoil)

    const playTrack = () => {
        return () => {
            fetch(`/player/PlayTrack?albumId=${albumId}&position=${positionInAlbum}&deviceId=${deviceIdState}`)
        }
    }

    return (
        <TrackEntryComponentStyle onClick={playTrack()} >
            <TrackImageStyle trackImage={images[2].url}/>
            <TrackInfoContainerStyle>
                <TracktitleStyle>{track.name}</TracktitleStyle>
                <TrackArtistStyle>{track.artists[0].name}</TrackArtistStyle>
            </TrackInfoContainerStyle>
        </TrackEntryComponentStyle>
    )
}

export default React.memo(TrackEntryComponent)