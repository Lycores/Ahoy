import globalStyle from './globalStyleSheet'
const coverSize = 300
const contentWidth = coverSize
const titleHeight = 30
const descriptionHeight = 60
const distanceTitleToCover = 10
const distanceDescriptionToTitle = 10

export const coverStyle = {
    width: coverSize,
    height: coverSize,
    borderRadius: globalStyle.borderRadius
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
    padding: 20,
    margin: globalStyle.margin
}
