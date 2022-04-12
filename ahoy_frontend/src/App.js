import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import HomePage from './page/HomePage';
import AlbumPage from './page/AlbumPage';
import WelcomePage from './page/WelcomePage'
import ArtistsPage from './page/ArtistsPage'
import TraditionalMusicPlayerPage from './page/TraditionalMusicPlayerPage'
function App() {

  var [token, setToken] = useState(null);
  var [userProfile, setUserProfile] = useState(null)
  var [deviceId, setDeviceId] = useState(null)

  async function getToken() {
    fetch('/auth/token').then((response)=>{
      return response.json()
    }).then((json)=>{
      setToken(json.access_token)
    })
  }

  async function getUserProfile() {
    fetch('/user/getUserProfile')
    .then((response)=>{
      return response.json()
    }).then((json)=>{
      setUserProfile(json)
      console.log(json)
    })
    
    
  }

  // const getNecessaryInfo = ()=> {
  //   if(!token || !userProfile){
  //     fetch('/auth/token').then((response)=> {
  //       return response.json()
  //     }).then((json)=>{
  //       setUserProfile(json)
  //     }).then(()=>{
  //       let response = await fetch('/user/getUserProfile')
  //       let json = await response.json();
  //       setUserProfile(json)
  //     })
  //   }
    
  // }

  useEffect(() => {

    if(!token){
      getToken();
    }
    if(!userProfile){
      getUserProfile()
    }
  }, [])

  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<WelcomePage />}/>
    //     <Route path="/home" element={<HomePage />}/>
    //     <Route path="/album" element={<AlbumPage token={token}/>}/>
    //     <Route path="/artists" element={<ArtistsPage token={token} userProfile={userProfile}/> }/>
    //   </Routes>
    // </BrowserRouter>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<WelcomePage />}/>
      <Route path="/traditional" element={<TraditionalMusicPlayerPage token={token} deviceId={deviceId} setDeviceId={setDeviceId}/>}>
        <Route exact path="album" element={<AlbumPage token={token} deviceId={deviceId}/>}/>
        <Route exact path="artists" element={<ArtistsPage token={token} userProfile={userProfile} deviceId={deviceId}/> }/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
