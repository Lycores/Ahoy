import {globalStyle} from './globalStyleSheet'

var MainBodyDistanceTop = globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginButton
var musicListDistanceButton = globalStyle.marginButton 
var musicListHeight = "calc(100% - " +  (MainBodyDistanceTop + musicListDistanceButton).toString() + "px)";

const mainBodyStyle={
    display:'none',
    height: musicListHeight,
    flexWrap: 'nowrap',
    alignItems: 'stretch'
}

export default mainBodyStyle