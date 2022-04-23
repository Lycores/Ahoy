import React,{ useEffect, useState} from "react"
import {artistOverviewStyle, backgroundFilterStyle, artistDescriptionStyle, coverStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/artistOverviewStyleSheet'
import TrackListComponent from "./TrackListComponent"
import {userProfileRecoil} from '../recoilInfo'
import {useRecoilValue} from 'recoil'
import styled from "styled-components"
import {RightAreaContainerStyle, RightAreaOverviewStyle, BackgroundFilterStyle, RightAreaCoverStyle, DescriptionStyle, RightAreaCoverContainerStyle} from './ReusableStyleComponent'

const ArtistNameStyle = styled.div`
    width:100%;
    margin-top:clamp(100px, 12.5vw, 150px);
    text-align:left; 
    font-size:clamp(30px, 6vw, 80px);
`


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
        // setCoverStyleState({
        //     ...coverStyleState,
        //     backgroundImage: `url(${artist.images[1].url})`,
        // })
        setCoverBackgroundImageState(artist.images[1].url)
        // setArtistOverviewStyleState({
        //     ...artistOverviewStyleState,
        //     backgroundImage: `url(${artist.images[0].url})`,
        //     backgroundSize: 'cover'
        // })
        setArtistOverviewBackgroundImageState(artist.images[0].url)
        getArtistTopTrack()
        getArtistAlbums()
    },[artist, userProfileState])

    var [artistTopTrackState, setArtistTopTrackState] = useState(null)
    var [artistAlbumsState, setArtistAlbumsState] = useState(null)
    // var [artistOverviewStyleState, setArtistOverviewStyleState] = useState(artistOverviewStyle)
    // var [coverStyleState, setCoverStyleState] = useState(coverStyle)
    var [coverBackgroundImageState, setCoverBackgroundImageState] = useState('')
    var [artistOverviewBackgroundImageState, setArtistOverviewBackgroundImageState] = useState('')


    return (
        <RightAreaContainerStyle>
            <RightAreaOverviewStyle backgroundImage={artistOverviewBackgroundImageState}>
                <BackgroundFilterStyle>
                    <RightAreaCoverContainerStyle>
                        <RightAreaCoverStyle backgroundImage={coverBackgroundImageState}/>
                    </RightAreaCoverContainerStyle>
                    
                    <DescriptionStyle>
                        <ArtistNameStyle>
                            {artist.name}
                        </ArtistNameStyle>
                    </DescriptionStyle>
                </BackgroundFilterStyle>
            </RightAreaOverviewStyle>
            <TrackListComponent artistTopTrack={artistTopTrackState} artistAlbums={artistAlbumsState}/>
        </RightAreaContainerStyle>
    )
}

export default React.memo(RightAreaComponentForArtistDetail)