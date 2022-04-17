import globalStyle from '../../globalStyle/globalStyleSheet'
import {searchBarStyleForDesktopOrTablet} from '../../floatElementStyle/floatStyleSheet'
const albumOverviewHeight = 410
export const albumOverviewStyle = {
    borderRadius: globalStyle.borderRadius,
    margin: globalStyle.margin,
    backgroundPosition: '-100px',
    
}

export const backgroundFilterStyle = {
    backdropFilter:'blur(5px)',
    background:'rgba(255,255,255,0.2)',
    color:'white',
    display: 'flex', 
    width: '100%',
    borderRadius: globalStyle.borderRadius
}

var coverStyleSize = albumOverviewHeight - 3*globalStyle.margin - searchBarStyleForDesktopOrTablet.height
export const coverStyle = {
    height: 'clamp(200px, 25vw, 300px)',
    width: 'clamp(200px, 25vw, 300px)',
    margin: globalStyle.margin,
    marginTop: globalStyle.margin*2 + searchBarStyleForDesktopOrTablet.height,
    borderRadius: globalStyle.borderRadius,
    backgroundSize: 'cover'
}


export const albumDescriptionStyle = {
    height: '100%',
    width: `calc(100% - ${coverStyleSize}px)`,
}
