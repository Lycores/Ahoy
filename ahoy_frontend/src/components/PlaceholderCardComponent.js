import {coverSize, coverStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
import React from 'react'
import {CardContainerStyle} from './ReusableStyleComponent'
function PlaceholderCardComponent() {
    return(
        <div className="col-md-6  col-lg-4 col-xl-3" >
            <CardContainerStyle>
                <div style={{...coverStyle, backgroundSize: coverSize}} className="ph-item"/>
            </CardContainerStyle>
        </div>
    )  
}

export default React.memo(PlaceholderCardComponent)
