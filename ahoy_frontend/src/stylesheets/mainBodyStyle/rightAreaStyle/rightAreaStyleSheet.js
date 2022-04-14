import {globalStyle} from '../../globalStyle/globalStyleSheet'

var rightAreaWidth = "calc(100% - " + (globalStyle.marginLeft + globalStyle.playlistAreaWidth + globalStyle.marginLeft + globalStyle.marginRight).toString() + "px)"

export const rightAreaStyleForDesktopOrTablet = {
    margin: globalStyle.margin,
    marginLeft: 0,
    height: '100%',
    // width: 'rightAreaWidth',
    boxShadow: globalStyle.boxShadow,
    borderRadius: globalStyle.borderRadius,
    flexGrow: 1
}

export const rightAreaStyleForMobile = {
    margin: globalStyle.margin,
    height: '100%',
    // width: 'rightAreaWidth',
    boxShadow: globalStyle.boxShadow,
    borderRadius: globalStyle.borderRadius,
    flexGrow: 1
}
