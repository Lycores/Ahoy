import {globalStyle, playListAreaStyle, borderRadius} from './globalStyleSheet'
import backButtonUrl from '../assets/back.png'
import nextButtonUrl from '../assets/next.png'
import pauseButtonUrl from '../assets/pause.png'
import startButtonUrl from '../assets/start.png'



var musicCoverSize = globalStyle.playlistAreaWidth - globalStyle.marginLeft- globalStyle.marginRight
var playerButtonSize = 40

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
    height: 50,
    marginTop: 20,
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

export var playerConatinerStyle = {
    marginLeft: globalStyle.marginLeft,
    marginRight: globalStyle.marginRight,
    marginTop: globalStyle.marginTop,
    marginBottom: globalStyle.marginBottom,
}

export var playerStyle = {
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow,
    bottom: 0,
    position: "absolute",
    borderRadius: globalStyle.borderRadius
}

export const playlistAreaStyle = {
    display: 'none',
    marginLeft: globalStyle.marginLeft,
    marginRight: globalStyle.marginRight,
    marginBottom: globalStyle.marginBottom,
    height: '100%',
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow,
    position: "relative" 
}