import React from 'react'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
import styled from 'styled-components'
import {TrackEntryComponentStyle} from './ReusableStyleComponent'

const PlaceholderRow = styled.div.attrs({
    className: "ph-row"
})``

function PlaceholderTrackEntryComponent(){

    return (
        <TrackEntryComponentStyle class="ph-item">
            <PlaceholderRow/>
        </TrackEntryComponentStyle>
    )
}

export default React.memo(PlaceholderTrackEntryComponent)