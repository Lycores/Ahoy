import {useEffect} from 'react'
import trackListComponentStyle from '../stylesheets/trackListStyleSheet'

function TrackListComponent(props){
    let {track} = props
   
    console.log(999)
    console.log(track)

    const playTrack = (trackUri) => {
        return () => {
            fetch(`/player/PlayTrack?trackUri=${trackUri}`)
        }
    }

    return (
        <div style={trackListComponentStyle} onClick={playTrack(track.uri)} >
            <span style={{display:'block'}}>{track.name}</span>
            <span style={{display:'block'}}>{track.artists[0].name}</span>
        </div>
    )
}

export default TrackListComponent