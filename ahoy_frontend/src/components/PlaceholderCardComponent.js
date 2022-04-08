import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'

function PlaceholderCardComponent() {
    return(
        <div className="col-md-6  col-lg-4 col-xl-3" >
            <div style={containerStyle} className="ph-item">
                <div style={{...coverStyle, backgroundSize: coverSize}} className="ph-picture"/>
            </div>
        </div>
  
       
    
    )
    
}

export default PlaceholderCardComponent
