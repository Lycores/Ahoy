import globalStyle from "../globalStyle/globalStyleSheet"
import {leftAreaStyle} from '../mainBodyStyle/leftAreaStyle/leftAreaStyleSheet'
const commonHeight = 100
const commonWidth = 50
//if you want to modify position of search bar change this
const searchBarToParentContainer = 20

export const tabToHomeStyle = {
    position:'fixed', 
    top:`calc(50% - ${commonHeight/2}px`, 
    right:'0px', 
    width: commonWidth,
    height: commonHeight,
    backgroundColor: globalStyle.globalBackgroundColor,
    ZIndex:99,
    borderRadius: '50px 0 0 50px',
    cursor: 'pointer',
    boxShadow: globalStyle.boxShadow,
    opacity:0.9
}

export const tabToTraditionalMusicPlayerStyle = {
    position:'fixed', 
    top:`calc(50% - ${commonHeight/2}px`, 
    left:'0px', 
    width: commonWidth,
    height: commonHeight,
    backgroundColor:globalStyle.globalBackgroundColor,
    ZIndex:99,
    borderRadius: '0 50px 50px 0',
    cursor: 'pointer',
    boxShadow: globalStyle.boxShadow,
    opacity:0.9
}

export const tabToExpandNavBarStyle = {
    position:'fixed', 
    top:`calc(50% - ${commonHeight/2}px`, 
    left:'0px', 
    width: commonWidth,
    height: commonHeight,
    backgroundColor:globalStyle.globalBackgroundColor,
    ZIndex:99,
    borderRadius: '0 50px 50px 0',
    cursor: 'pointer',
    boxShadow: globalStyle.boxShadow,
    opacity:0.9
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
    left:searchBarToLeftForMobile - globalStyle.margin, 
    width: searchBarWidth,
    height: searchBarHeight,  
    borderRadius: '50px 50px 50px 50px',
    cursor: 'pointer',
    transitionDuration: '500ms',
    boxShadow: globalStyle.boxShadowForInput,
    
}

export const searchBarInputStyle = {
    marginLeft: '20px',
    marginTop:'2px',
    height: '80%',
    width:'80%',
    outlineStyle: 'none',
    border: 0,
    fontSize: '24px',
    backgroundColor: 'transparent',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis'
}