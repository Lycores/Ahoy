import 'bootstrap/dist/css/bootstrap-grid.css';
import TrackEntryComponent from './TrackEntryComponent'
import {albumOverviewStyle, coverStyle, albumDescriptionStyle, backgroundFilterStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/albumOverviewStyle'
import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import {useState, useEffect} from 'react'

function RightAreaComponentForTracks(props) {
    var {album, deviceId} = props
    // var {tracks, trackCover, setTrack} = props
    var tracks = album.tracks.items
    let heightOfTracks = `calc(100% - ${albumOverviewStyle.height}px) `
    let styleForTrackContainer = {
        boxShadow: globalStyle.boxShadow, 
        borderRadius: globalStyle.borderRadius
    }

    var [coverStyleState, setCoverStyleState] = useState(coverStyle)
    var [albumOverviewStyleStyleState, setAlbumOverviewStyleStyleState] = useState(albumOverviewStyle)

    useEffect(()=>{
        setCoverStyleState({
            ...coverStyleState,
            backgroundImage: `url(${album.images[1].url})`
        })
        setAlbumOverviewStyleStyleState({
            ...albumOverviewStyleStyleState,
            backgroundImage: `url(${album.images[0].url})`,
            backgroundSize: 'cover'
        })
    },[album, deviceId])
        
        
    return(
        <div style={{height: '100%', overflow: 'scroll'}}>
                <div style={albumOverviewStyleStyleState}>
                    <div style={backgroundFilterStyle}>
                        <div style={albumDescriptionStyle}></div>
                        <div style={coverStyleState}></div>
                        
                    </div>
                    
                </div>
                <div style={styleForTrackContainer}>
                    {
                        tracks.map((track, index)=> {
                            return (
                                
                                
                                <TrackEntryComponent key={index} track={track} albumId={album.id} positionInAlbum={index} deviceId={deviceId}/>
                            )
                        })
                    }
                </div>
            
            </div>
        
        
    )
    
}

export default RightAreaComponentForTracks