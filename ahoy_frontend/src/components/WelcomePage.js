import {globalStyle}  from '../stylesheets/globalStyleSheet'
import spotify from '../assets/spotify_welcome.png'
import {useNavigate} from 'react-router-dom'
function WelcomePage() {

    const backgroundStyle= {
        backgroundColor:  globalStyle.globalBackgroundColor
    }

    const welcomeImage = {
        width: 300,
        height: 300,
        backgroundImage: `url(${spotify})`
    }

    const navigate = useNavigate()

    return(
        <div style={backgroundStyle}>
            <div style={welcomeImage} onClick={() => {navigate('/index')}}>
            </div>
        </div>
    )
}

export default WelcomePage