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
    marginButton: globalStyle.marginButton
}

export var playerStyle = {
    height: "auto",
    width: globalStyle.playlistAreaWidth
}

export const playlistAreaStyle = {
    display: 'none',
    marginLeft: globalStyle.marginLeft,
    marginRight: globalStyle.marginRight,
    marginButton: globalStyle.marginButton,
    height: '100%',
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow
}