import {coverSize, coverStyle, containerStyleForPlaceHolder} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
import React from 'react'
function PlaceholderCardComponent() {
    return(
        <div className="col-md-6  col-lg-4 col-xl-3" >
            <div style={containerStyleForPlaceHolder} >
                <div style={{...coverStyle, backgroundSize: coverSize}} className="ph-item"/>
            </div>
        </div>
    )  
}

export default React.memo(PlaceholderCardComponent)
