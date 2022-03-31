import {globalStyle, playListAreaStyle, borderRadius} from './globalStyleSheet'


var albumCoverSize = 250

var albumCoverStyle = {
    height: albumCoverSize,
    width: albumCoverSize
}

var playbackBarStyle = {
    width: albumCoverSize,
    height: 100,
    marginTop: 20
} 

var playerConatiner = {
    marginLeft: globalStyle.marginLeft,
    marginRight: globalStyle.marginRight,
    marginTop: globalStyle.marginTop,
    marginButton: globalStyle.marginButton
}

var player = {
    height: "auto",
    width: globalStyle.playlistAreaWidth
}

const playlistAreaStyle = {
    display: 'none',
    marginLeft: globalStyle.marginLeft,
    marginRight: globalStyle.marginRight,
    marginButton: globalStyle.marginButton,
    height: '100%',
    width: globalStyle.playlistAreaWidth,
    boxShadow: globalStyle.boxShadow
}






export default playlistAreaStyle