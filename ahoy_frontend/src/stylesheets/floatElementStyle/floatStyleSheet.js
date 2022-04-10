import globalStyle from "../globalStyle/globalStyleSheet"
import {leftAreaStyle} from '../mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
const tabToHomeHeight = 100
const tabToHomeWidth = 50
const tabToPlaylistHeight = 100
const tabToPlaylistWidth = 50
//if you want to modify position of search bar change this
const searchBarToParentContainer = 20

export const tabToHomeStyle = {
    position:'fixed', 
    top:`calc(50% - ${tabToHomeHeight/2}px`, 
    right:'0px', 
    width: tabToHomeWidth,
    height: tabToHomeHeight,
    backgroundColor:'white',
    ZIndex:99,
    borderRadius: '50px 0 0 50px',
    cursor: 'pointer'
}

export const tabToPlaylistStyle = {
    position:'fixed', 
    top:`calc(50% - ${tabToPlaylistHeight/2}px`, 
    left:'0px', 
    width: tabToPlaylistWidth,
    height: tabToPlaylistHeight,
    backgroundColor:'white',
    ZIndex:99,
    borderRadius: '0 50px 50px 0',
    cursor: 'pointer'
}

const searchBarHeight = 50
const searchBarWidth = 150
export const searchBarMaxWidth = 400
const searchBarToTop = searchBarToParentContainer + globalStyle.margin
const searchBarToLeftForDesktopOrTablet = globalStyle.playlistAreaWidth + 2*globalStyle.margin + searchBarToParentContainer
const searchBarToLeftForMobile = 2*globalStyle.margin + searchBarToParentContainer
export const searchBarStyleForDesktopOrTablet = {
    position:'fixed',
    top:searchBarToTop, 
    left:searchBarToLeftForDesktopOrTablet, 
    width: searchBarWidth,
    height: searchBarHeight,
    borderRadius: '50px 50px 50px 50px',
    cursor: 'pointer',
    transitionDuration: '500ms',
    boxShadow: globalStyle.boxShadowForInput
}

export const searchBarStyleForMobile = {
    position:'fixed',
    top:searchBarToTop, 
    left:searchBarToLeftForMobile, 
    width: searchBarWidth,
    height: searchBarHeight,  
    borderRadius: '50px 50px 50px 50px',
    cursor: 'pointer',
    transitionDuration: '500ms',
    boxShadow: globalStyle.boxShadowForInput
}

export const searchBarInputStyle = {
    marginLeft: '20px',
    marginTop:'2px',
    height: '80%',
    width:'350px',
    outlineStyle: 'none',
    border: 0,
    fontSize: '24px',
    backgroundColor: 'transparent'
}