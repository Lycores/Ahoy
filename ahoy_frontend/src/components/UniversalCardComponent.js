import {coverStyle, titleStyle, descriptionStyle, containerStyle, cardTitleStyle, cardSubtitleStyle, artistsNameStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { GridSpaceStyle, CardContainerStyle, CardCoverStyle, AlbumNameStyle, ArtistsNameStyle} from './ReusableStyleComponent.js'
const PlaylistNameStyle = styled.div`
    margin-left:7px;
    margin-top:10px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: x-large;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical; 
`

function UniversalCardComponent(props) {
    var {item, type} = props
    // var {artists,images,albumName, tracks} = props
    console.log(item)
    const navigate = useNavigate()
    
    const goToAlbumPage = () => {   
        navigate('/traditional/album', {
            state: {
                album:item
            }
        })
    }

    const goToArtistPage = () => {
        navigate('/traditional/artists', {
            state: {
                artist:item
            }
        })
    }

    const goToPlaylistPage = () => {
        navigate('/traditional/playlist', {
            state:{
                playlist:item
            }
        })
    }


    if(type == 'album'){
        return(
            <GridSpaceStyle onClick={goToAlbumPage}>
                <CardContainerStyle>
                    <CardCoverStyle imageUrl={item.images[1].url}/>
                    <AlbumNameStyle>{item.name}</AlbumNameStyle>
                    <span style={cardSubtitleStyle}>{item.artists[0].name}</span>
                </CardContainerStyle>
            </GridSpaceStyle>
        
        )
    }
    if(type == 'artists'){
        return(
            <GridSpaceStyle onClick={goToArtistPage}>
                <CardContainerStyle>
                    <CardCoverStyle imageUrl={item.images[1].url}/>
                    <ArtistsNameStyle>{item.name}</ArtistsNameStyle>
                </CardContainerStyle>
            </GridSpaceStyle>
        
        )
    }
    if(type == 'playlist'){
        return(
            <GridSpaceStyle>
                <CardContainerStyle>
                    {item.images.length == 0 ? <div style={{...coverStyle, backgroundSize: coverSize}} />
                    :<CardCoverStyle imageUrl={item.images[0].url}/>}
                    <PlaylistNameStyle>{item.name}</PlaylistNameStyle>
                </CardContainerStyle>
            </GridSpaceStyle>
        )
    }
    
    
}

export default React.memo(UniversalCardComponent)
