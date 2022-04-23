import React from 'react'
import '../stylesheets/css/placeholderCardComponentStyleSheet.css'
import styled from 'styled-components'

const TrackEntryComponentStyle = styled.div.attrs({
    className: "ph-item"
})`
    margin: var(--global-margin);
    height: 50px;
    border-radius: var(--global-border-radius);
    cursor: pointer;
    display: flex;
`

const PlaceholderRow = styled.div.attrs({
    className: "ph-row"
})``


function PlaceholderTrackEntryComponent(){

    return (
        <TrackEntryComponentStyle>
            <PlaceholderRow/>
        </TrackEntryComponentStyle>
    )
}

export default React.memo(PlaceholderTrackEntryComponent)