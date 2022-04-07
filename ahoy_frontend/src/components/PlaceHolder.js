import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'

function PlaceHolder() {
    return(
        <div className="col-md-6  col-lg-4 col-xl-3" >
            <div  style={containerStyle} >
                <div style={{...coverStyle, backgroundColor:"black", backgroundSize: coverSize}} />
                <h5 class="placeholder-glow">
                    <span class="placeholder col-6"></span>
                </h5>
            </div>
        </div>
    
    )
    
}

export default PlaceHolder
