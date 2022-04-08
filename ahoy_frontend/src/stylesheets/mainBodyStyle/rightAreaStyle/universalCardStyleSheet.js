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
    cursor: 'pointer'
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

export const containerStyle = {
    height: coverSize + titleHeight + descriptionHeight + distanceTitleToCover + distanceDescriptionToTitle,
    width: coverSize,
    padding: globalStyle.padding,
    margin: globalStyle.margin,
    boxShadow: globalStyle.boxShadow,
    borderRadius: globalStyle.borderRadius,
    margin:'auto',
    marginTop:20,
    marginBottom: 20

}
