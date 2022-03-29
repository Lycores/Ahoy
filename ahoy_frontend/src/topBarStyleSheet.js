import globalStyle from './globalStyleSheet'
import App from './App'

export var musicStripDistanceLeft = globalStyle.marginLeft + globalStyle.homeButtonWidth + globalStyle.marginRight
export var musicStripDistanceRight = globalStyle.marginLeft + globalStyle.homeButtonWidth + globalStyle.marginRight

var musicStripWidth = "calc(100% - " +  (musicStripDistanceLeft + musicStripDistanceRight).toString() + "px)";
console.log(musicStripWidth)

export var topBarStyle = {
    height: globalStyle.marginTop + globalStyle.headerItemHeight + globalStyle.marginButton
}



export var musicStripStyle = {
    height: globalStyle.headerItemHeight,
    width: musicStripWidth,
    borderRadius: '15px',
    boxShadow: '3px 3px 5px #000',
    position: 'fixed',
    top: globalStyle.marginTop,
    left: musicStripDistanceLeft
}

export var homeButtonStyle = {
    height: globalStyle.headerItemHeight,
    width: globalStyle.homeButtonWidth,
    boxShadow: '3px 3px 5px #000',
    borderRadius: '15px',
    position: 'fixed',
    top: globalStyle.marginTop,
    left: globalStyle.marginLeft
}

export var loginButtonStyle = {
    height: globalStyle.headerItemHeight,
    width: globalStyle.loginButtonWidth,
    boxShadow: '3px 3px 5px #000',
    borderRadius: '15px',
    position:'fixed',
    top:globalStyle.marginTop,
    right:globalStyle.marginRight
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

