import {globalStyle} from '../../globalStyle/globalStyleSheet'


var musicCoverSize = globalStyle.playlistAreaWidth - globalStyle.marginLeft- globalStyle.marginRight
var playerButtonSize = 40
var playbackBarHeight = 50
var playbackBarMarginTop = 20
var heightOfLibrary = 180
var heightOfAlbumList = "calc(100% - " + (playbackBarHeight + playbackBarMarginTop + musicCoverSize + 4*globalStyle.margin + heightOfLibrary).toString() + "px)"
var heightOfPlayerForMobile = 100
export var musicCoverStyle = {
    height: musicCoverSize,
    width: musicCoverSize,
    boxShadow: globalStyle.boxShadow,
    borderRadius: globalStyle.borderRadius
}

export var musicCoverStyleForMobile = {
    height: heightOfPlayerForMobile - 2*globalStyle.margin,
    width: heightOfPlayerForMobile - 2*globalStyle.margin,
    margin: globalStyle.margin
}

export var playbackButtonStyle = {
    height: playerButtonSize,
    width: playerButtonSize,
    backgroundSize: '90%',
    boxShadow: globalStyle.boxShadow

}

export const playbackBarStyle = {
    width: musicCoverSize,
    height: playbackBarHeight,
    marginTop: playbackBarMarginTop,
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-around'
}




export var playerStyleForDesktopOrTablet = {
    padding: globalStyle.padding,
    width: musicCoverSize,
    boxShadow: globalStyle.boxShadow,
    bottom: '-10px',
    position: "absolute",
    borderRadius: globalStyle.borderRadius,
    left: globalStyle.margin
}

export var playerStyleForMobile = {
    position: 'fixed',
    width:'auto',
    height: '100px',
    bottom: '0px',
    backgroundColor: 'white',
    left:10,
    right:10,
    bottom: 10,
    borderRadius: globalStyle.borderRadius,
    zIndex: 5
}
export var libraryStyle = {
    margin: globalStyle.margin,
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow,
    height: heightOfLibrary,
    borderRadius: globalStyle.borderRadius,
    overflow:'hidden'
}

export var libraryEntryStyle = {
    height: '18%',
    margin:'10px',
    backgroundColor:'white',
    cursor:'pointer'
}




export var albumListStyle = {
    margin: globalStyle.margin,
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow,
    height: heightOfAlbumList,
    borderRadius: globalStyle.borderRadius
}



export const leftAreaStyle = {
    height: '100%',
    position: "relative" 
}