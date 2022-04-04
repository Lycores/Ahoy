import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/universalCardStyleSheet.js'

function UniversalCardComponent() {
    return(
    <div style={containerStyle}>
        <div style={coverStyle} />
        <div style={titleStyle}/>
        <div style={descriptionStyle}/>
    </div>
    )
    
}

export default UniversalCardComponent
