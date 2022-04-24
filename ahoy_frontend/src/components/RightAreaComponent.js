import React,{ useEffect, useState} from "react"
import TrackListComponent from "./TrackListComponent"
import styled from "styled-components"
import {RightAreaContainerStyle, RightAreaOverviewStyle, BackgroundFilterStyle, RightAreaCoverStyle, DescriptionStyle, RightAreaCoverContainerStyle} from './ReusableStyleComponent'
import 'bootstrap/dist/css/bootstrap-grid.css';

const ArtistNameStyle = styled.div`
    width:100%;
    margin-top:clamp(100px, 12.5vw, 150px);
    text-align:left; 
    font-size:clamp(30px, 6vw, 80px);
`

const AlbumNameStyle = styled.div`
    width:100%;
    margin-top:clamp(100px, 15vw, 180px);
    text-align:left; 
    font-size:clamp(30px, 5vw, 100px);
    -webkit-line-clamp: 3;
`

function RightAreaComponent(props){
    let {artist, album} = props
    const userProfileState = JSON.parse(localStorage.getItem("userProfile"))
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

        var [artistTopTrackState, setArtistTopTrackState] = useState(null)
        var [artistAlbumsState, setArtistAlbumsState] = useState(null)
        var [coverBackgroundImageState, setCoverBackgroundImageState] = useState('')
        var [artistOverviewBackgroundImageState, setArtistOverviewBackgroundImageState] = useState('')
        var [albumOverviewBackgroundImageState, setAlbumOverviewBackgroundImageState] = useState('')
        useEffect(()=>{
            if(artist){
                setCoverBackgroundImageState(artist.images[1].url)
                setArtistOverviewBackgroundImageState(artist.images[0].url)
                getArtistTopTrack()
                getArtistAlbums()
            }
            if(album){
                setCoverBackgroundImageState(album.images[1].url)
                setAlbumOverviewBackgroundImageState(album.images[0].url)
            }
            
        },[artist, album])

        if(artist){
            return (
                <RightAreaContainerStyle>
                    <RightAreaOverviewStyle imageUrl={artistOverviewBackgroundImageState}>
                        <BackgroundFilterStyle>
                            <RightAreaCoverContainerStyle>
                                <RightAreaCoverStyle imageUrl={coverBackgroundImageState}/>
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
        if(album){
            return(
                <RightAreaContainerStyle>
                    <RightAreaOverviewStyle imageUrl={albumOverviewBackgroundImageState}>
                        <BackgroundFilterStyle >
                        <RightAreaCoverContainerStyle>
                            <RightAreaCoverStyle imageUrl={coverBackgroundImageState}/>
                        </RightAreaCoverContainerStyle>
                        <DescriptionStyle>
                            <AlbumNameStyle>
                                {album.name}
                            </AlbumNameStyle>
                        </DescriptionStyle>
                        </BackgroundFilterStyle>
                    </RightAreaOverviewStyle>
                    <TrackListComponent album={album}/>
                </RightAreaContainerStyle>   
            )
        }
        
    
}

export default React.memo(RightAreaComponent)