import {globalStyle, borderRadius} from './globalStyleSheet'

var albumListWidth = "calc(100% - " + (globalStyle.marginLeft + globalStyle.playlistWidth + globalStyle.marginLeft + globalStyle.marginRight).toString() + "px)"
const albumListStyle = {
    display: 'none',
    marginRight: globalStyle.marginRight,
    marginButton: globalStyle.marginButton,
    height: '100%',
    width: albumListWidth,
    boxShadow: globalStyle.boxShadow,
    borderRadius: borderRadius
}

export default albumListStyle