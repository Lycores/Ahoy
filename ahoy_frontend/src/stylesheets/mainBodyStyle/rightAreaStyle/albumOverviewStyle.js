import globalStyle from '../../globalStyle/globalStyleSheet'

const albumOverviewHeight = 300
export const albumOverviewStyle = {
    borderRadius: globalStyle.borderRadius,
    margin: globalStyle.margin,
    boxShadow: globalStyle.boxShadow,
    height: albumOverviewHeight,
    display: 'flex'
}


var coverStyleSize = albumOverviewHeight - 2*globalStyle.margin
export const coverStyle = {
    height: coverStyleSize,
    width: coverStyleSize,
    boxShadow: globalStyle.boxShadow,
    margin: globalStyle.margin,
    borderRadius: globalStyle.borderRadius,
    backgroundImage: ''
}



export const albumDescriptionStyle = {
    height: '100%',
    width: `calc(100% - ${coverStyleSize}px)`,
}
