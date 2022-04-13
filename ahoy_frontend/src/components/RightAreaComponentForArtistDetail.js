import React,{ useEffect, useState} from "react"
import {artistOverviewStyle, backgroundFilterStyle, artistDescriptionStyle, coverStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/artistOverviewStyleSheet'
import TrackListComponent from "./TrackListComponent"
import {userProfileState} from '../recoilInfo'
import {useRecoilValue} from 'recoil'
function RightAreaComponentForArtistDetail(props){
    let {artist} = props
    const userProfile = useRecoilValue(userProfileState)

    const getArtistTopTrack = () => {
        fetch(`/artists/getArtistTopTrack?artistId=${artist.id}&market=${userProfile.country}`)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            setArtistTopTrackState(json)
        })
    }

    const getArtistAlbums = async () => {
        fetch(`/artists/getArtistAlbums?artistId=${artist.id}&market=${userProfile.country}`)
        .then((response)=>{
            return response.json()
        }).then((json)=>{
            console.log('getArtistAlbums', json)
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
        // setArtistTopTrackState(artistTopTrack)
        // let artistAlbums = getArtistAlbums()
        // setArtistAlbumsState(artistAlbums)
        // artistTopTrack.forEach((track)=>{
        //     let albumId = track.album.id
        //     fetch(`/album/getAlbum?albumId=${albumId}`).then((response)=> {
        //         console.log(response)
        //     })
        // })

        
    },[artist, userProfile])

    var [artistTopTrackState, setArtistTopTrackState] = useState(null)
    var [artistAlbumsState, setArtistAlbumsState] = useState(null)
    var [artistOverviewStyleState, setArtistOverviewStyleState] = useState(artistOverviewStyle)
    var [coverStyleState, setCoverStyleState] = useState(coverStyle)

    return (
        <div style={{height: '100%', overflow: 'scroll' }}>
            <div style={artistOverviewStyleState}>
                <div style={backgroundFilterStyle}>
                    <div style={artistDescriptionStyle}></div>
                    <div style={coverStyleState}></div>
                </div>
            </div>
            <TrackListComponent artistTopTrack={artistTopTrackState} artistAlbums={artistAlbumsState}/>
        </div>
    )
}

export default React.memo(RightAreaComponentForArtistDetail)