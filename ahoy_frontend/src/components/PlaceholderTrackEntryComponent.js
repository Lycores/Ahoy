import React from 'react'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
import styled from 'styled-components'
import {TrackEntryComponentStyle} from './ReusableStyleComponent'

const PlaceholderRow = styled.div.attrs({
    className: "ph-row"
})``

const PlaceholderTrackEntryComponentStyle = styled.div.attrs({
    className: "ph-item"
})`
    margin: var(--global-margin);
    height: 50px;
    border-radius: var(--global-border-radius);
    cursor: pointer;
    display: flex;
`

function PlaceholderTrackEntryComponent(){

    return (
        <PlaceholderTrackEntryComponentStyle class="ph-item">
            <PlaceholderRow/>
        </PlaceholderTrackEntryComponentStyle>
    )
}

export default React.memo(PlaceholderTrackEntryComponent)