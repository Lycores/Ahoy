import {globalStyle} from './globalStyleSheet'
import App from '../App'
import spotifyLogo from '../assets/spotify.png'
import avatar from '../assets/avatar.png'

export var musicStripDistanceLeft = globalStyle.marginLeft + globalStyle.homeButtonWidth + globalStyle.marginRight
export var musicStripDistanceRight = globalStyle.marginLeft + globalStyle.homeButtonWidth + globalStyle.marginRight

var musicStripWidth = "calc(100% - " +  (musicStripDistanceLeft + musicStripDistanceRight).toString() + "px)";

export var topBarStyle = {
    height: globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginButton
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
    borderRadius: '15px',
    boxShadow: globalStyle.boxShadow,
    position: 'fixed',
    top: globalStyle.marginTop,
    left: musicStripDistanceLeft,
    cursor: 'pointer'
}

export var homeButtonStyle = {
    height: globalStyle.headerItemHeight,
    width: globalStyle.homeButtonWidth,
    boxShadow: globalStyle.boxShadow,
    borderRadius: '15px',
    position: 'fixed',
    top: globalStyle.marginTop,
    left: globalStyle.marginLeft,
    cursor: 'pointer'
}

export var loginButtonStyle = {
    height: globalStyle.headerItemHeight,
    width: globalStyle.loginButtonWidth,
    boxShadow: globalStyle.boxShadow,
    borderRadius: '15px',
    position:'fixed',
    top:globalStyle.marginTop,
    right:globalStyle.marginRight,
    cursor: 'pointer',
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

