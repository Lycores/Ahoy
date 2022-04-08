import 'bootstrap/dist/css/bootstrap-grid.css';
import TrackListComponent from './TrackListComponent'
import {albumOverviewStyle, coverStyle, albumDescriptionStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/albumOverviewStyle'
import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import {useState, useEffect} from 'react'

function RightAreaComponentForTracks(props) {
    console.log("device id are")
    var {album, deviceId} = props

    console.log(album)
    // var {tracks, trackCover, setTrack} = props
    var tracks = album.tracks.items
    let heightOfTracks = `calc(100% - ${albumOverviewStyle.height}px) `
    console.log(heightOfTracks)

    let styleForTrackContainer = {
        height: heightOfTracks,
        boxShadow: globalStyle.boxShadow, 
        borderRadius: globalStyle.borderRadius
    }

    var [coverStyleState, setCoverStyleState] = useState(coverStyle)


    useEffect(()=>{
        setCoverStyleState({
            ...coverStyleState,
            backgroundImage: `url(${album.images[0].url})`,
            backgroundSize: 'contain'})
    },[album, deviceId])
        
    return(
        <div style={{height: '100%', overflow: 'scroll'}}>
            <div style={albumOverviewStyle}>
                <div style={coverStyleState}></div>
                <div style={albumDescriptionStyle}></div>
            </div>
            <div style={styleForTrackContainer}>
                {
                    tracks.map((track, index)=> {
                        return (
                            
                            // <TrackListComponent key={index}  track={track} deviceId={deviceId}/>
                            <TrackListComponent key={index} track={track} albumId={album.id} positionInAlbum={index} deviceId={deviceId}/>
                        )
                    })
                }
            </div>
            
        </div>
        
    )
    
}

export default RightAreaComponentForTracks