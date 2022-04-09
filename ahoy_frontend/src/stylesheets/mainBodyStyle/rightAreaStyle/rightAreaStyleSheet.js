import {globalStyle} from '../../globalStyle/globalStyleSheet'

var rightAreaWidth = "calc(100% - " + (globalStyle.marginLeft + globalStyle.playlistAreaWidth + globalStyle.marginLeft + globalStyle.marginRight).toString() + "px)"

const rightAreaStyle = {
    marginRight: globalStyle.marginRight,
    marginBottom: globalStyle.marginBottom,
    height: '100%',
    width: rightAreaWidth,
    boxShadow: globalStyle.boxShadow,
    borderRadius: globalStyle.borderRadius
}

export default rightAreaStyle