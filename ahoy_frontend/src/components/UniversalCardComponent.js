import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
function UniversalCardComponent(props) {
    var {artists,images,albumName, tracks} = props
    const navigate = useNavigate()
    
    const seeDetailOfAlbum = (tracks) => {
        return () => {
            console.log("after album clicked the tracks are")
            console.log(tracks)
            navigate('/playlist', {
                state: {
                    trackCover: images,
                    tracks: tracks
                }
            })
        }
    }
    return(
        <div className="col-md-6  col-lg-4 col-xl-3" onClick={seeDetailOfAlbum(tracks.items)}>
            <div  style={containerStyle} >
                <div style={{...coverStyle, backgroundImage:`url(${images[1].url})`, backgroundSize: coverSize}} />
                <h5>{albumName}</h5>
                <p>{artists[0].name}</p>
            </div>
        </div>
    
    )
    
}

export default UniversalCardComponent
