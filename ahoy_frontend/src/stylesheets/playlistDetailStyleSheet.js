import {globalStyle, borderRadius} from './globalStyleSheet'

var playlistDetailWidth = "calc(100% - " + (globalStyle.marginLeft + globalStyle.playlistAreaWidth + globalStyle.marginLeft + globalStyle.marginRight).toString() + "px)"

const playlistDetailStyle = {
    display: 'none',
    marginRight: globalStyle.marginRight,
    marginButton: globalStyle.marginButton,
    height: '100%',
    width: playlistDetailWidth,
    boxShadow: globalStyle.boxShadow,
    borderRadius: borderRadius
}

export default playlistDetailStyle