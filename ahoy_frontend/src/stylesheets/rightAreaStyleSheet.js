import {globalStyle} from './globalStyleSheet'

var musicListWidth = "calc(100% - " + (globalStyle.marginLeft + globalStyle.playlistAreaWidth + globalStyle.marginLeft + globalStyle.marginRight).toString() + "px)"

const rightAreaStyle = {
    marginRight: globalStyle.marginRight,
    marginBottom: globalStyle.marginBottom,
    height: '100%',
    width: musicListWidth,
    boxShadow: globalStyle.boxShadow,
    borderRadius: globalStyle.borderRadius
}

export default rightAreaStyle