import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
import 'placeholder-loading/dist/css/placeholder-loading.css'

function PlaceHolder() {
    return(
        <div className="col-md-6  col-lg-4 col-xl-3" >
            <div  style={containerStyle} >
                <div style={{...coverStyle, backgroundSize: coverSize}} className="ph-picture" />
                
            </div>
        </div>
    
    )
    
}

export default PlaceHolder
