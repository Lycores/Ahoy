import {globalStyle, borderRadius} from './globalStyleSheet'

var playlistDistanceTop = globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginButton
var playlistDistanceButton = globalStyle.marginButton 
var playlistHeight = "calc(100% - " +  (playlistDistanceTop + playlistDistanceButton).toString() + "px)";
const playListStyle = {
    display: 'none',
    marginLeft: globalStyle.marginLeft,
    marginRight: globalStyle.marginRight,
    marginButton: globalStyle.marginButton,
    height: '100%',
    width: '200px',
    boxShadow: "3px 3px 5px #000",
    borderRadius: borderRadius
}

export default playListStyle