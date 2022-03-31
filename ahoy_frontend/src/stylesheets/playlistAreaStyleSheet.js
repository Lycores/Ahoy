import {globalStyle, playListAreaStyle, borderRadius} from './globalStyleSheet'


var musicCoverSize = 250

var musicCoverStyle = {
    height: musicCoverSize,
    width: musicCoverSize
}

var playbackBarStyle = {
    width: musicCoverSize,
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