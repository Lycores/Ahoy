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
import {RightAreaContainerStyle, BackgroundFilterStyle, RightAreaCoverStyle, RightAreaOverviewStyle, DescriptionStyle} from './ReusableStyleComponent'

const AlbumNameStyle = styled.div`
    width:100%;
    margin-top:clamp(130px, 17.5vw, 200px);
    text-align:left; 
    font-size:clamp(30px, 6vw, 80px);
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
        <RightAreaContainerStyle>
            <RightAreaOverviewStyle backgroundImage={albumOverviewBackgroundImageState}>
                <BackgroundFilterStyle >
                <RightAreaCoverStyle backgroundImage={coverBackgroundImageState}/>
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

export default React.memo(RightAreaComponentForAlbum)