import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
function UniversalCardComponent(props) {
    var {item, type} = props
    // var {artists,images,albumName, tracks} = props
    const navigate = useNavigate()
    
    const goToAlbumPage = () => {   
        navigate('/album', {
            state: {
                album:item
            }
        })
    }

    const goToArtistPage = () => {
        navigate('/artists', {
            state: {
                artist:item
            }
        })
    }


    if(type == 'album'){
        return(
            <div className="col-md-6  col-lg-4 col-xl-3" onClick={goToAlbumPage}>
                <div  style={containerStyle} >
                    <div style={{...coverStyle, backgroundImage:`url(${item.images[1].url})`, backgroundSize: coverSize}} />
                    <h5>{item.name}</h5>
                    <p>{item.artists[0].name}</p>
                </div>
            </div>
        
        )
    }
    if(type == 'artists'){
        return(
            <div className="col-md-6  col-lg-4 col-xl-3" onClick={goToArtistPage}>
                <div  style={containerStyle} >
                    <div style={{...coverStyle, backgroundImage:`url(${item.images[1].url})`, backgroundSize: coverSize}} />
                    <h5>{item.name}</h5>
                </div>
            </div>
        
        )
    }
    
    
}

export default UniversalCardComponent
