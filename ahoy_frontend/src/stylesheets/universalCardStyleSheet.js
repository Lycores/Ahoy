import globalStyle from './globalStyleSheet'
export const coverSize = 190
const contentWidth = coverSize
const titleHeight = 30
const descriptionHeight = 60
const distanceTitleToCover = 10
const distanceDescriptionToTitle = 10

export const coverStyle = {
    width: coverSize,
    height: coverSize,
    borderRadius: globalStyle.borderRadius,
    boxShadow: globalStyle.boxShadow
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
