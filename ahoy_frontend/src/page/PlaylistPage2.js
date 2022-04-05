import '../App.css';
import {useLocation} from 'react-router-dom'

function PlaylistPage() {
    var {state} = useLocation()
    console.log("state are")
    var tracks = state
    return (
        <></>
    )
}

export default PlaylistPage;
