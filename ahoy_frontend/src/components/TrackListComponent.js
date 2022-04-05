import trackListComponentStyle from '../stylesheets/trackListStyleSheet'

function TrackListComponent(props){
    let {trackName, artists} = props
    return (
        <div style={trackListComponentStyle} >
            <span style={{display:'block'}}>{trackName}</span>
            <span style={{display:'block'}}>{artists}</span>
        </div>
    )
}

export default TrackListComponent