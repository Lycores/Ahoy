import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, Navigate} from 'react-router-dom'
import HomePage from './page/HomePage';
import AlbumPage from './page/AlbumPage';
import WelcomePage from './page/WelcomePage'
import ArtistsPage from './page/ArtistsPage'
import PlaylistPage from './page/PlaylistPage'
import TraditionalMusicPlayerPage from './page/TraditionalMusicPlayerPage'
import { userProfileRecoil} from './recoilInfo'
import {useRecoilState} from 'recoil'
import RouteProtector from './components/RouteProtector'
function App() {

  var [forceUpdate, setForceUpdate] = useState(null);
  // var [userProfileState, setUserProfileState] = useRecoilState(userProfileRecoil)
  // var [deviceId, setDeviceId] = useState(null)

  async function getToken() {
    fetch('/auth/token').then((response)=>{
      return response.json()
    }).then((json)=>{
      localStorage.setItem('token', JSON.stringify(json.access_token))
      setForceUpdate(0)
      // setToken(json.access_token)
    })
  }

  async function getUserProfile() {
    fetch('/user/getUserProfile')
    .then((response)=>{
      return response.json()
    }).then((json)=>{
      // setUserProfileState(json)
      localStorage.setItem("userProfile", JSON.stringify(json))
    })
  }

  useEffect(() => {
    getToken();
    getUserProfile()
    
  }, [])

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route element={<RouteProtector/>}>
          <Route path="/traditional" element={<TraditionalMusicPlayerPage/>}>
            <Route exact path="album" element={<AlbumPage/>}/>
            <Route exact path="artists" element={<ArtistsPage/> }/>
            <Route exact path="playlist" element={<PlaylistPage/> }/>
          </Route>
        </Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
