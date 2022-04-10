import globalStyle from '../../globalStyle/globalStyleSheet'

const albumOverviewHeight = 300
export const albumOverviewStyle = {
    borderRadius: globalStyle.borderRadius,
    margin: globalStyle.margin,
    boxShadow: globalStyle.boxShadow,
    height: albumOverviewHeight,
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

var coverStyleSize = albumOverviewHeight - 2*globalStyle.margin
export const coverStyle = {
    height: coverStyleSize,
    width: coverStyleSize,
    boxShadow: globalStyle.boxShadow,
    margin: globalStyle.margin,
    borderRadius: globalStyle.borderRadius,
}


export const albumDescriptionStyle = {
    height: '100%',
    width: `calc(100% - ${coverStyleSize}px)`,
}
