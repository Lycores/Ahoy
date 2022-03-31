import {globalStyle} from './globalStyleSheet'

var MainBodyDistanceTop = globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginButton
var playlistDetailDistanceButton = globalStyle.marginButton 
var playListDetailHeight = "calc(100% - " +  (MainBodyDistanceTop + playlistDetailDistanceButton).toString() + "px)";

const mainBodyStyle={
    display:'none',
    height: playListDetailHeight,
    flexWrap: 'nowrap',
    alignItems: 'stretch'
}

export default mainBodyStyle