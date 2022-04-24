import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
import React from 'react'
import {CardContainerStyle, GridSpaceStyle, CardCoverStyle} from './ReusableStyleComponent'
function PlaceholderCardComponent() {
    return(
        <GridSpaceStyle>
            <CardContainerStyle>
                <CardCoverStyle skeleton="ph-item"/>
            </CardContainerStyle>
        </GridSpaceStyle>
    )  
}

export default React.memo(PlaceholderCardComponent)
