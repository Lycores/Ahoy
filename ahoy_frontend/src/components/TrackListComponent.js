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
        console.log(tracks)
        renderQueue.push(
            <div style={styleForTrackContainer}>
                {
                    tracks.map((track, index)=> {
                        return (
                            <TrackEntryComponent key={track.id} track={track} albumId={album.id} positionInAlbum={index} deviceId={deviceId}/>
                        )
                    })
                }
            </div>
        )
    }else{
        if(artistTopTrack){
            var tracks = artistTopTrack.tracks
            renderQueue.push(
                <div style={styleForTrackContainer}>
                    {
                        tracks.map((track, index)=> {
                            return (
                                <TrackEntryComponent key={track.id} track={track} albumId={track.album.id} positionInAlbum={track.track_number-1} deviceId={deviceId}/>
                            )
                        })
                    }
                </div>
            )
        }else{
            renderQueue.push(<div key="artistTopTrackFalse"/>)       
        }

        if(artistAlbums){
            renderQueue.push(
                <div style={{margin: globalStyle.margin, borderRadius: globalStyle.borderRadius, boxShadow:globalStyle.boxShadow}}>
                    <RightAreaComponentForCardPresent itemList={artistAlbums.items} type="album" key="artistAlbumsTrue"/>
                </div>
            
            )
        }else{
            return(
                renderQueue.push(<div key="artistAlbumsFalse"/>)
            )
        }
    }
    return renderQueue

    
    
}

export default React.memo(TrackListComponent)

