import {globalStyle} from './globalStyleSheet'
import backButtonUrl from '../assets/back.png'
import nextButtonUrl from '../assets/next.png'
import pauseButtonUrl from '../assets/pause.png'
import startButtonUrl from '../assets/start.png'



var musicCoverSize = globalStyle.playlistAreaWidth - globalStyle.marginLeft- globalStyle.marginRight
var playerButtonSize = 40
var playbackBarHeight = 50
var playbackBarMarginTop = 20
var heightOfAlbumList = "calc(100% - " + (playbackBarHeight + playbackBarMarginTop + musicCoverSize + globalStyle.marginTop + 2*globalStyle.marginBottom).toString() + "px)"
console.log(musicCoverSize)
console.log(heightOfAlbumList)

export var musicCoverStyle = {
    height: musicCoverSize,
    width: musicCoverSize,
    boxShadow: globalStyle.boxShadow,
    borderRadius: globalStyle.borderRadius
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

export var playerStyle = {
    padding: globalStyle.padding,
    width: musicCoverSize,
    boxShadow: globalStyle.boxShadow,
    bottom: 0,
    position: "absolute",
    borderRadius: globalStyle.borderRadius
}

export var albumListStyle = {
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow,
    height: heightOfAlbumList,
    borderRadius: globalStyle.borderRadius
}

export const leftAreaStyle = {
    marginLeft: globalStyle.marginLeft,
    marginRight: globalStyle.marginRight,
    marginBottom: globalStyle.marginBottom,
    height: '100%',
    width: globalStyle.playlistAreaWidth,
    position: "relative" 
}