import {useEffect} from 'react'
import trackListComponentStyle from '../stylesheets/trackListStyleSheet'

function TrackListComponent(props){
    let {track, album, setModifiedTrack} = props
    var modifiedTrack = null
    console.log(999)
    console.log(track)
    console.log(album)
    var albumObj = {images:album.images, name: album.name, uri: "spotify:album:" + album.id}
    
    const passTrackToPlayer = ()=> {
        setModifiedTrack(modifiedTrack)
    }
    useEffect(() => {
        modifiedTrack = {album: albumObj, ...track}
    })

    return (
        <div style={trackListComponentStyle} onClick={passTrackToPlayer}>
            <span style={{display:'block'}}>{track.name}</span>
            <span style={{display:'block'}}>{track.artists[0].name}</span>
        </div>
    )
}

export default TrackListComponent