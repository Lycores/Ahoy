import {coverStyle, titleStyle, descriptionStyle, containerStyle} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet.js'
import {coverSize} from '../stylesheets/mainBodyStyle/rightAreaStyle/universalCardStyleSheet'
import {useNavigate} from 'react-router-dom'
function UniversalCardComponent(props) {
    var {item, type} = props
    console.log("666")
    console.log(item)
    console.log(type)
    // var {artists,images,albumName, tracks} = props
    const navigate = useNavigate()
    
    const seeDetailOfAlbum = () => {
        return () => {
            console.log("after album clicked the tracks are")
            navigate('/playlist', {
                state: {
                    album:item
                }
            })
        }
    }

    if(type == 'album'){
        return(
            <div className="col-md-6  col-lg-4 col-xl-3" onClick={seeDetailOfAlbum()}>
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
            <div className="col-md-6  col-lg-4 col-xl-3" >
                <div  style={containerStyle} >
                    <div style={{...coverStyle, backgroundImage:`url(${item.images[1].url})`, backgroundSize: coverSize}} />
                    <h5>{item.name}</h5>
                </div>
            </div>
        
        )
    }
    
    
}

export default UniversalCardComponent
