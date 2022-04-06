import trackListComponentStyle from '../stylesheets/trackListStyleSheet'

function TrackListComponent(props){
    let {track, trackCover} = props
    console.log(999)
    console.log(track)
    return (
        <div style={trackListComponentStyle} >
            <span style={{display:'block'}}>{track.name}</span>
            <span style={{display:'block'}}>{track.artists[0].name}</span>
        </div>
    )
}

export default TrackListComponent