import {globalStyle} from './globalStyleSheet'

var MainBodyDistanceTop = globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginBottom
var musicListDistanceBottom = globalStyle.marginBottom 
var musicListHeight = "calc(100% - " +  (MainBodyDistanceTop + musicListDistanceBottom).toString() + "px)";

const mainBodyStyle={
    display:'flex',
    height: musicListHeight,
    flexWrap: 'nowrap',
    alignItems: 'stretch'
}

export default mainBodyStyle