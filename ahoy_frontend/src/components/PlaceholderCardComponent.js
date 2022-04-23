import {coverSize, coverStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
import React from 'react'
import {CardContainerStyle, GridSpaceStyle, CardCoverStyle} from './ReusableStyleComponent'
function PlaceholderCardComponent() {
    return(
        <GridSpaceStyle>
            <CardContainerStyle>
                <CardCoverStyle class="ph-item"/>
            </CardContainerStyle>
        </GridSpaceStyle>
    )  
}

export default React.memo(PlaceholderCardComponent)
