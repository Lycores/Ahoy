import {globalStyle} from '../globalStyle/globalStyleSheet'
import App from '../../App'
import spotifyLogo from '../../assets/spotify.png'
import avatar from '../../assets/avatar.png'

export var musicStripDistanceLeft = globalStyle.marginLeft + globalStyle.homeButtonWidth + globalStyle.marginRight
export var musicStripDistanceRight = globalStyle.marginLeft + globalStyle.homeButtonWidth + globalStyle.marginRight

var musicStripWidth = "calc(100% - " +  (musicStripDistanceLeft + musicStripDistanceRight).toString() + "px)";

export var topBarStyle = {
    height: globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginBottom
}

const headerStyleReusable = {
    borderRadius: globalStyle.borderRadius,
    position: 'fixed',
    cursor: 'pointer'
}

const spotify = {
    backgroundImage:`url(${spotifyLogo})`,
    backgroundPosition:"center",
    backgroundSize: "80%",
    backgroundRepeat:"no-repeat"
  }

export var musicStripStyle = {
    height: globalStyle.headerItemHeight,
    width: musicStripWidth,
    boxShadow: globalStyle.boxShadow,
    top: globalStyle.marginTop,
    left: musicStripDistanceLeft,
    ...headerStyleReusable
}

export var homeButtonStyle = {
    height: globalStyle.headerItemHeight,
    width: globalStyle.homeButtonWidth,
    boxShadow: globalStyle.boxShadow,
    top: globalStyle.marginTop,
    left: globalStyle.marginLeft,
    ...headerStyleReusable
}

export var loginButtonStyle = {
    height: globalStyle.headerItemHeight,
    width: globalStyle.loginButtonWidth,
    boxShadow: globalStyle.boxShadow,
    top:globalStyle.marginTop,
    right:globalStyle.marginRight,
    ...headerStyleReusable,
    ...spotify 
    // '&::after': clearfix
}

const clearfix = {
    visibility: 'hidden',
    display: 'block',
    fontSize: 0,
    content: " ",
    clear: 'both',
    height: 0
}

