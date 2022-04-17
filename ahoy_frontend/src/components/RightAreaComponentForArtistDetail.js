import React,{ useEffect, useState} from "react"
import {artistOverviewStyle, backgroundFilterStyle, artistDescriptionStyle, coverStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/artistOverviewStyleSheet'
import TrackListComponent from "./TrackListComponent"
import {userProfileRecoil} from '../recoilInfo'
import {useRecoilValue} from 'recoil'
function RightAreaComponentForArtistDetail(props){
    let {artist} = props
    const userProfileState = useRecoilValue(userProfileRecoil)

    const getArtistTopTrack = () => {
        fetch(`/artists/getArtistTopTrack?artistId=${artist.id}&market=${userProfileState.country}`)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setArtistTopTrackState(json)
        })
    }

    const getArtistAlbums = async () => {
        fetch(`/artists/getArtistAlbums?artistId=${artist.id}&market=${userProfileState.country}`)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setArtistAlbumsState(json)
        })

    }

    useEffect(()=>{
        setCoverStyleState({
            ...coverStyleState,
            backgroundImage: `url(${artist.images[1].url})`,
        })
        setArtistOverviewStyleState({
            ...artistOverviewStyleState,
            backgroundImage: `url(${artist.images[0].url})`,
            backgroundSize: 'cover'
        })

        getArtistTopTrack()
        getArtistAlbums()
    },[artist, userProfileState])

    var [artistTopTrackState, setArtistTopTrackState] = useState(null)
    var [artistAlbumsState, setArtistAlbumsState] = useState(null)
    var [artistOverviewStyleState, setArtistOverviewStyleState] = useState(artistOverviewStyle)
    var [coverStyleState, setCoverStyleState] = useState(coverStyle)

    return (
        <div style={{height: '100%', overflow: 'scroll' }}>
            <div style={artistOverviewStyleState}>
                <div style={backgroundFilterStyle}>
                    <div style={coverStyleState}/>
                    <div style={artistDescriptionStyle}>
                        <div style={{ width:'100%', marginTop:'clamp(70px, 10vw, 130px)', textAlign:'left', fontSize:'clamp(30px, 6vw, 80px)'}}>{artist.name}</div>
                    </div>
                    
                </div>
            </div>
            <TrackListComponent artistTopTrack={artistTopTrackState} artistAlbums={artistAlbumsState}/>
        </div>
    )
}

export default React.memo(RightAreaComponentForArtistDetail)