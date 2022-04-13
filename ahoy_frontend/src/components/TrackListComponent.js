import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import TrackEntryComponent from './TrackEntryComponent'
import {styleForTrackContainer} from  '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
import React from 'react'
import RightAreaComponentForCardPresent from './RightAreaComponentForCardPresent';
function TrackListComponent(props){
    var {album, deviceId, artistTopTrack, artistAlbums} = props
    // if(album){
    //     var tracks = album.tracks.items
    // }
    // if(artistTopTrack){
    //     console.log(artistTopTrack)
    //     var tracks = artistTopTrack.tracks
    // }
    
    var renderQueue = []
    

    if(album){
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

    if(artistTopTrack){
        var tracks = artistTopTrack.tracks
        return(
            <div style={styleForTrackContainer}>
                {
                    tracks.map((track, index)=> {
                        return (
                            <TrackEntryComponent key={index} track={track} albumId={track.album.id} positionInAlbum={track.track_number-1} deviceId={deviceId}/>
                        )
                    })
                }
            </div>
        )
    }else{
        return(
            <></>
        )
    }


    // if(artistAlbums){
    //     <RightAreaComponentForCardPresent itemList={} type="album"/>
    // }else{
    //     return(
    //         <></>
    //     )
    // }
    
}

export default React.memo(TrackListComponent)

