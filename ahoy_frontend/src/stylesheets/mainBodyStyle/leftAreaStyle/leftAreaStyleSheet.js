import {globalStyle} from '../../globalStyle/globalStyleSheet'
import backButtonUrl from '../../../assets/back.png'
import nextButtonUrl from '../../../assets/next.png'
import pauseButtonUrl from '../../../assets/pause.png'
import startButtonUrl from '../../../assets/start.png'

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

export var backStyle = {
    ...playbackButtonStyle,
    backgroundImage: `url(${backButtonUrl})`
}

export var nextStyle = {
    ...playbackButtonStyle,
    backgroundImage: `url(${nextButtonUrl})`
}

export var pauseStyle = {
    ...playbackButtonStyle,
    backgroundImage: `url(${pauseButtonUrl})`
}

export var startStyle = {
    ...playbackButtonStyle,
    backgroundImage: `url(${startButtonUrl})`
}

export var backStyleForMobile = {
    height: '80px',
    width: '80px',
    matgin: '10px',
    backgroundImage: `url(${backButtonUrl})`
}
export var nextStyleForMobile = {
    height: '80px',
    width: '80px',
    matgin: '10px',
    backgroundImage: `url(${nextButtonUrl})`
}

export var startStyleForMobile = {
    height: '80px',
    width: '80px',
    matgin: '10px',
    backgroundImage: `url(${startButtonUrl})`
}

export var pauseStyleForMobile = {
    height: '80px',
    width: '80px',
    matgin: '10px',
    backgroundImage: `url(${pauseButtonUrl})`
}



export var playerStyleForDesktopOrTablet = {
    padding: globalStyle.padding,
    width: musicCoverSize,
    boxShadow: globalStyle.boxShadow,
    bottom: 0,
    position: "absolute",
    borderRadius: globalStyle.borderRadius
}

export var playerStyleForMobile = {
    position: 'fixed',
    width:'100%',
    height: '100px',
    bottom: '0px',
    backgroundColor: 'black'
}
export var libraryStyle = {
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow,
    height: heightOfLibrary,
    borderRadius: globalStyle.borderRadius,
    marginBottom: globalStyle.marginBottom,
    overflow:'hidden'
}

export var libraryEntryStyle = {
    height: '18%',
    margin:'10px',
    backgroundColor:'white',
    cursor:'pointer'
}




export var albumListStyle = {
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow,
    height: heightOfAlbumList,
    borderRadius: globalStyle.borderRadius
}



export const leftAreaStyle = {
    margin: globalStyle.margin,
    height: '100%',
    width: globalStyle.playlistAreaWidth,
    position: "relative" 
}