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

const searchButtonHeight = 50
const searchButtonWidth = 150
export const searchButtonMaxWidth = 400
const searchBarToTop = searchBarToParentContainer + globalStyle.margin
const searchBarToLeft = globalStyle.playlistAreaWidth + 2*globalStyle.margin + searchBarToParentContainer
export const searchBarStyle = {
    position:'fixed',
    top:searchBarToTop, 
    left:searchBarToLeft, 
    width: searchButtonWidth,
    height: searchButtonHeight,
    backgroundColor:'white',
    borderRadius: '50px 50px 50px 50px',
    cursor: 'pointer',
    transitionDuration: '500ms'
}