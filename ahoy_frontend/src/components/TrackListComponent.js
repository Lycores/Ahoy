import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import TrackEntryComponent from './TrackEntryComponent'
import {styleForTrackContainer} from  '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
import React, { useEffect, useState } from 'react'
import RightAreaComponentForCardPresent from './RightAreaComponentForCardPresent';
import {userProfileRecoil} from '../recoilInfo'
import {useRecoilValue} from 'recoil'
import PlaceholderCardComponent from './PlaceholderCardComponent'
import PlaceholderTrackEntryComponent from './PlaceholderTrackEntryComponent'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
function TrackListComponent(props){
    var {album, artistTopTrack, artistAlbums} = props
    var renderQueue = []
    var [tracksState, setTracksState] = useState([])
    const loadTrackList = () => {
        if(tracksState.length == 0){
            renderQueue.push(<></>)
        }else{
            renderQueue.push(
                <div style={styleForTrackContainer}>
                    {
                        tracksState.map((track, index)=> {
                            return (
                                <TrackEntryComponent key={track.id} track={track} albumId={album.id} positionInAlbum={index} images={album.images}/>
                            )
                        })
                    }
                </div>
            )
        }
        
    }
    const userProfileState = useRecoilValue(userProfileRecoil)
    
    useEffect(()=>{
        if(album){
            let tracks = null
            try{
                tracks = album.tracks.items
                setTracksState(tracks)
            }catch{
                fetch(`/album/getAlbum?albumId=${album.id}&market=${userProfileState.country}`)
                .then((response)=>{
                    return response.json()
                }).then((json)=>{
                    setTracksState(json.tracks.items)
                })
            }
        }
        
    },[])
    
    if(album){
        loadTrackList()
    }else{
        if(artistTopTrack){
            var tracks = artistTopTrack.tracks
            renderQueue.push(
                <div style={styleForTrackContainer}>
                    {
                        tracks.map((track, index)=> {
                            return (
                                <TrackEntryComponent key={track.id} track={track} albumId={track.album.id} positionInAlbum={track.track_number-1} images={track.album.images} />
                            )
                        })
                    }
                </div>
            )
        }else{
            for(var i = 0; i < 10; i++){
                renderQueue.push(
                    <PlaceholderTrackEntryComponent/>
                )  
            }
                 
        }

        if(artistAlbums){
            renderQueue.push(
                <div style={{margin: globalStyle.margin, borderRadius: globalStyle.borderRadius, boxShadow:globalStyle.boxShadow}}>
                    <RightAreaComponentForCardPresent itemList={artistAlbums.items} type="album" key="artistAlbumsTrue"/>
                </div>
            
            )
        }else{
            return(
                renderQueue.push(
                    <div style={{margin: globalStyle.margin, borderRadius: globalStyle.borderRadius, boxShadow:globalStyle.boxShadow}}>
                         <div style={{height: '100%', overflowY: 'scroll', overflowX: "hidden"}}>
                            <div className="row justify-content-start">
                                <PlaceholderCardComponent/>
                                <PlaceholderCardComponent/>
                                <PlaceholderCardComponent/>
                                <PlaceholderCardComponent/>
                                <PlaceholderCardComponent/>
                                <PlaceholderCardComponent/>
                                <PlaceholderCardComponent/>
                            </div> 
                        </div>
                    </div>
                )
            )
        }
    }
    return renderQueue   
}

export default React.memo(TrackListComponent)

