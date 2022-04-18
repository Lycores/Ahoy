import {coverStyle, titleStyle, descriptionStyle, containerStyle, cardTitleStyle, cardSubtitleStyle, artistsNameStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'



function UniversalCardComponent(props) {
    var {item, type} = props
    // var {artists,images,albumName, tracks} = props
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


    if(type == 'album'){
        return(
            <div className="col-md-6  col-lg-4 col-xl-3" onClick={goToAlbumPage}>
                <div  style={containerStyle} >
                    <div style={{...coverStyle, backgroundImage:`url(${item.images[1].url})`, backgroundSize: coverSize}} />
                    <span style={cardTitleStyle}>{item.name}</span>
                    <span style={cardSubtitleStyle}>{item.artists[0].name}</span>
                </div>
            </div>
        
        )
    }
    if(type == 'artists'){
        return(
            <div className="col-md-6  col-lg-4 col-xl-3" onClick={goToArtistPage}>
                <div  style={containerStyle} >
                    <div style={{...coverStyle, backgroundImage:`url(${item.images[1].url})`, backgroundSize: coverSize}} />
                    <div style={artistsNameStyle}>{item.name}</div>
                </div>
            </div>
        
        )
    }
    if(type == 'playlist'){
        return(
            <div className="col-md-6  col-lg-4 col-xl-3" >
                <div  style={containerStyle} >
                    {item.images.length == 0 ? <div style={{...coverStyle, backgroundSize: coverSize}} />
                    :<div style={{...coverStyle, backgroundImage:`url(${item.images[0].url})`, backgroundSize: coverSize}} />}
                    <div style={artistsNameStyle}>{item.name}</div>
                </div>
            </div>
        )
    }
    
    
}

export default React.memo(UniversalCardComponent)
