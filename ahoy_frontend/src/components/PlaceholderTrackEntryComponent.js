import React from 'react'
import {trackEntryComponentStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/trackComponentStyleSheet'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
function PlaceholderTrackEntryComponent(){

    return (
        <div style={trackEntryComponentStyle} className="ph-item" >
            <div className="ph-row" />
        </div>
    )
}

export default React.memo(PlaceholderTrackEntryComponent)