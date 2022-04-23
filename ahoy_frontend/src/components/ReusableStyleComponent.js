import styled from "styled-components"

export const RightAreaContainerStyle = styled.div`
height: 100%;
overflow: scroll;
`

export const BackgroundFilterStyle = styled.div`
    backdrop-filter:blur(5px);
    background:rgba(255,255,255,0.2);
    color:white;
    display: flex; 
    width: 100%;
    border-radius: var(--global-border-radius);
`
export const RightAreaCoverContainerStyle = styled.div`
    width: clamp(200px, 25vw, 300px);
    min-width: 200px;
    margin: var(--global-margin);
    margin-top: calc(var(--global-margin) * 2 + var(--search-bar-height));  
`

export const AlbumNameStyle = styled.div`
    display: block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size:x-large;
    margin-left:7px;
    margin-top:10px;
`

export const ArtistsNameStyle = styled.div`
    overflow:hidden;
    text-overflow:ellipsis;
    font-size:x-large;
    margin-left:7px;
    margin-top:10px;
`
export const RightAreaCoverStyle = styled.div`
padding-bottom: 100%;
width: 100%;
border-radius: calc(var(--global-border-radius));
background-size: cover;
background-image: url(${props => props.backgroundImage});
`  

export const RightAreaOverviewStyle  = styled.div`
border-radius: var(--global-border-radius);
margin: var(--global-margin);
background-image: url(${props => props.backgroundImage});
background-repeat: no-repeat;
background-size: cover;
background-position: 0px, -100px;
`

export const DescriptionStyle = styled.div`
height: 100%;
`

export const CardContainerStyle = styled.div`
    height: 270px;
    width: 190px;
    padding: var(--global-padding);
    box-shadow: var(--global-box-shadow);
    border-radius: var(--global-border-radius);
    margin: auto;
    margin-top: 50px;
    margin-bottom:50px;
    cursor: pointer;
`

export const CardCoverStyle = styled.div`
    width: 190px;
    height: 190px;
    border-radius: var(--global-border-radius);
    box-shadow: var(--global-box-shadow);
    background-image: url(${props=>props.imageUrl}); 
    background-size: 190px;
`
export const GridSpaceStyle = styled.div.attrs({
    className:"col-md-6  col-lg-4 col-xl-3"
})``