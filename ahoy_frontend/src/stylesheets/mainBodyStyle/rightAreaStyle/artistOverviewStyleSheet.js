import globalStyle from '../../globalStyle/globalStyleSheet'

const artistOverviewHeight = 300
export const artistOverviewStyle = {
    borderRadius: globalStyle.borderRadius,
    margin: globalStyle.margin,
    height: artistOverviewHeight,
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

var coverStyleSize = artistOverviewHeight - 2*globalStyle.margin
export const coverStyle = {
    height: coverStyleSize,
    width: coverStyleSize,
    margin: globalStyle.margin,
    borderRadius: globalStyle.borderRadius,
}

export const artistDescriptionStyle = {
    height: '100%',
    width: `calc(100% - ${coverStyleSize}px)`,
}
