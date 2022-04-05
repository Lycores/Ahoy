import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/universalCardStyleSheet.js'
import {useState} from 'react'
function UniversalCardComponent(props) {
    var {artists,images,albumName,tracks} = props
    return(
        <div className="col-md-6  col-lg-4 col-xl-3">
            <div  style={containerStyle} >
                <div style={{...coverStyle, backgroundImage:`url(${images[1].url})`}} />
                <h5>{albumName}</h5>
                <p>{artists[0].name}</p>
            </div>
        </div>
    
    )
    
}

export default UniversalCardComponent
