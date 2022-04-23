import globalStyle from '../../globalStyle/globalStyleSheet'
export const coverSize = 190
const contentWidth = coverSize
const titleHeight = 40
const descriptionHeight = 40
const distanceTitleToCover = 0
const distanceDescriptionToTitle = 0

export const coverStyle = {
    width: coverSize,
    height: coverSize,
    borderRadius: globalStyle.borderRadius,
    boxShadow: globalStyle.boxShadow,
}


export const titleStyle = {
    height: titleHeight,
    marginTop: distanceTitleToCover,
    width: contentWidth
}

export const descriptionStyle = {
    height: descriptionHeight,
    marginTop: distanceDescriptionToTitle,
    width: contentWidth
}

// export const containerStyleForPlaceHolder = {
//     height: coverSize + titleHeight + descriptionHeight + distanceTitleToCover + distanceDescriptionToTitle,
//     width: coverSize,
//     padding: globalStyle.padding,
//     boxShadow: globalStyle.boxShadow,
//     borderRadius: globalStyle.borderRadius,
//     margin:'auto',
//     marginTop:50,
//     marginBottom:50,
//     cursor: 'pointer'
// }

export const cardTitleStyle = {
    display: 'block',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    fontSize:'x-large',
    marginLeft:'7px',
    marginTop:'10px'
}

export const artistsNameStyle = {
    overflow:'hidden',
    textOverflow:'ellipsis',
    fontSize:'x-large',
    marginLeft:'7px',
    marginTop:'10px'
}

export const cardSubtitleStyle = {
    display: 'block',
    whiteSpace:'nowrap',
    overflow:'hidden',
    textOverflow:'ellipsis',
    fontSize:'medium',
    marginLeft:'7px',
    marginTop:'10px'
}
