import {globalStyle}  from '../stylesheets/globalStyleSheet'
import spotify from '../assets/spotify_welcome.png'
import {useNavigate} from 'react-router-dom'
function WelcomePage() {

    const backgroundStyle= {
        backgroundColor:  globalStyle.globalBackgroundColor,
        width: '100vw',
        height: '100vh'
    }

    const welcomeImage = {
        marginLeft: "auto",
        marginRight: "auto",
        width: 300,
        height: 300,
        backgroundImage: `url(${spotify})`,
        backgroundSize: '80%'
    }

    const navigate = useNavigate()

    return(
        <div style={backgroundStyle}>
            <a href="/auth/login">
                <div style={welcomeImage}/>
            </a>
            
          
        </div>
    )
}

export default WelcomePage