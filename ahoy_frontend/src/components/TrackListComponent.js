import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import TrackEntryComponent from './TrackEntryComponent'
import {styleForTrackContainer} from  '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
import React, { useEffect, useState } from 'react'
import RightAreaComponentForCardPresent from './RightAreaComponentForCardPresent';
import {userProfileState} from '../recoilInfo'
import {useRecoilValue} from 'recoil'
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
                                <TrackEntryComponent key={track.id} track={track} albumId={album.id} positionInAlbum={index} />
                            )
                        })
                    }
                </div>
            )
        }
        
    }
    const userProfile = useRecoilValue(userProfileState)
    
    useEffect(()=>{
        if(album){
            let tracks = null
            try{
                tracks = album.tracks.items
                setTracksState(tracks)
            }catch{
                fetch(`/album/getAlbum?albumId=${album.id}&market=${userProfile.country}`)
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
                                <TrackEntryComponent key={track.id} track={track} albumId={track.album.id} positionInAlbum={track.track_number-1}/>
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

