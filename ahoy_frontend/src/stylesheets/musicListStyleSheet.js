import {globalStyle, borderRadius} from './globalStyleSheet'

var musicListWidth = "calc(100% - " + (globalStyle.marginLeft + globalStyle.playlistAreaWidth + globalStyle.marginLeft + globalStyle.marginRight).toString() + "px)"

const musicListStyle = {
    display: 'none',
    marginRight: globalStyle.marginRight,
    marginButton: globalStyle.marginButton,
    height: '100%',
    width: musicListWidth,
    boxShadow: globalStyle.boxShadow,
    borderRadius: borderRadius
}

export default musicListStyle