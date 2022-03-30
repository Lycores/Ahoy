import {globalStyle} from './globalStyleSheet'

var MainBodyDistanceTop = globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginButton
var albumListDistanceButton = globalStyle.marginButton 
var albumListHeight = "calc(100% - " +  (MainBodyDistanceTop + albumListDistanceButton).toString() + "px)";

const mainBodyStyle={
    display:'none',
    height: albumListHeight,
    flexWrap: 'nowrap',
    alignItems: 'stretch'
}

export default mainBodyStyle