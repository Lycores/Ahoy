import {coverStyle, titleStyle, descriptionStyle, containerStyle, cardTitleStyle, cardSubtitleStyle, artistsNameStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
import { ContainerStyle } from './ReusableStyleComponent.js'
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
            <div className="col-md-6  col-lg-4 col-xl-3" onClick={goToAlbumPage}>
                <ContainerStyle>
                    <div style={{...coverStyle, backgroundImage:`url(${item.images[1].url})`, backgroundSize: coverSize}} />
                    <span style={cardTitleStyle}>{item.name}</span>
                    <span style={cardSubtitleStyle}>{item.artists[0].name}</span>
                </ContainerStyle>
            </div>
        
        )
    }
    if(type == 'artists'){
        return(
            <div className="col-md-6  col-lg-4 col-xl-3" onClick={goToArtistPage}>
                <ContainerStyle>
                    <div style={{...coverStyle, backgroundImage:`url(${item.images[1].url})`, backgroundSize: coverSize}} />
                    <div style={artistsNameStyle}>{item.name}</div>
                </ContainerStyle>
            </div>
        
        )
    }
    if(type == 'playlist'){
        return(
            <div className="col-md-6  col-lg-4 col-xl-3" >
                <ContainerStyle>
                    {item.images.length == 0 ? <div style={{...coverStyle, backgroundSize: coverSize}} />
                    :<div style={{...coverStyle, backgroundImage:`url(${item.images[0].url})`, backgroundSize: coverSize}} />}
                    <PlaylistNameStyle>{item.name}</PlaylistNameStyle>
                </ContainerStyle>
            </div>
        )
    }
    
    
}

export default React.memo(UniversalCardComponent)
