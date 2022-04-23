import {coverSize, coverStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
import React from 'react'
import {ContainerStyle} from './ReusableStyleComponent'
function PlaceholderCardComponent() {
    return(
        <div className="col-md-6  col-lg-4 col-xl-3" >
            <ContainerStyle>
                <div style={{...coverStyle, backgroundSize: coverSize}} className="ph-item"/>
            </ContainerStyle>
        </div>
    )  
}

export default React.memo(PlaceholderCardComponent)
