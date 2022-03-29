import {globalStyle, borderRadius} from './globalStyleSheet'

var albumListDistanceTop = globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginButton
var albumListDistanceButton = globalStyle.marginButton 
var albumListHeight = "calc(100% - " +  (albumListDistanceTop + albumListDistanceButton).toString() + "px)"
const albumListStyle = {
    display: 'none',
    marginRight: globalStyle.marginRight,
    marginButton: globalStyle.marginButton,
    height: '100%',
    width: '200px',
    boxShadow: "3px 3px 5px #000",
    borderRadius: borderRadius
}

export default albumListStyle