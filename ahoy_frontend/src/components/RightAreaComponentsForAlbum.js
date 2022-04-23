import 'bootstrap/dist/css/bootstrap-grid.css';
import TrackEntryComponent from './TrackEntryComponent'
import {albumOverviewStyle, coverStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/albumOverviewStyle'
import globalStyle from '../stylesheets/globalStyle/globalStyleSheet';
import React,{useState, useEffect, useRef} from 'react'
import TrackListComponent from './TrackListComponent'
import {DesktopOrTablet, Mobile} from '../MediaQuery'
import {searchBarHeight} from '../stylesheets/floatElementStyle/floatStyleSheet.js'
// import '../stylesheets/css/typography.css'
import styled from "styled-components"

const AlbumOverviewStyle  = styled.div`
    border-radius: var(--global-border-radius);
    margin: var(--global-margin);
    background-position: -100px;
    background-image: url(${props => props.backgroundImage});
`
const BackgroundFilterStyle = styled.div`
    backdrop-filter:blur(5px);
    background:rgba(255,255,255,0.2);
    color:white;
    display: flex; 
    width: 100%;
    border-radius: var(--global-border-radius);
`
const AlbumDescriptionStyle = styled.div`
    height: 100%;
`
const AlbumNameStyle = styled.div`
    width:100%;
    margin-top:clamp(130px, 17.5vw, 200px);
    text-align:left; 
    font-size:clamp(30px, 6vw, 80px);
`
const CoverStyle = styled.div`
    height: clamp(200px, 25vw, 300px);
    width: clamp(200px, 25vw, 300px);
    min-width: 200px;
    margin: var(--global-margin);
    margin-top: calc(var(--global-margin) * 2 + var(--search-bar-height));
    border-radius: calc(var(--global-border-radius));
    background-size: cover;
    background-image: url(${props => props.backgroundImage});
`  

function RightAreaComponentForAlbum(props) {
    var {album} = props
    var [coverBackgroundImageState, setCoverBackgroundImageState] = useState('')
    var [albumOverviewBackgroundImageState, setAlbumOverviewBackgroundImageState] = useState('')

    useEffect(()=>{
        setCoverBackgroundImageState(album.images[1].url)
        setAlbumOverviewBackgroundImageState(album.images[0].url)
    },[album])
         
    return(
        <div style={{height: '100%', overflow: 'scroll'}}>
            <AlbumOverviewStyle backgroundImage={albumOverviewBackgroundImageState}>
                <BackgroundFilterStyle >
                <CoverStyle backgroundImage={coverBackgroundImageState}/>
                    <AlbumDescriptionStyle>
                        <AlbumNameStyle>
                            {album.name}
                        </AlbumNameStyle>
                    </AlbumDescriptionStyle>
                </BackgroundFilterStyle>
            </AlbumOverviewStyle>
            <TrackListComponent album={album}/>
        </div>
        
        
    )
    
}

export default React.memo(RightAreaComponentForAlbum)