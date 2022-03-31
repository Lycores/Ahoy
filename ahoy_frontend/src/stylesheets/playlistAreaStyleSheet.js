import {globalStyle, playListAreaStyle, borderRadius} from './globalStyleSheet'


var musicCoverSize = 250

export var musicCoverStyle = {
    height: musicCoverSize,
    width: musicCoverSize
}

export var playbackBarStyle = {
    width: musicCoverSize,
    height: 100,
    marginTop: 20
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