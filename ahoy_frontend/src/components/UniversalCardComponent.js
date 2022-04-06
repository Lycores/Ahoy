import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
function UniversalCardComponent(props) {
    var {album} = props
    // var {artists,images,albumName, tracks} = props
    const navigate = useNavigate()
    
    const seeDetailOfAlbum = () => {
        return () => {
            console.log("after album clicked the tracks are")
            navigate('/playlist', {
                state: {
                    album:album
                }
            })
        }
    }
    return(
        <div className="col-md-6  col-lg-4 col-xl-3" onClick={seeDetailOfAlbum()}>
            <div  style={containerStyle} >
                <div style={{...coverStyle, backgroundImage:`url(${album.images[1].url})`, backgroundSize: coverSize}} />
                <h5>{album.name}</h5>
                <p>{album.artists[0].name}</p>
            </div>
        </div>
    
    )
    
}

export default UniversalCardComponent
