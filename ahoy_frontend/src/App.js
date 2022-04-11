import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import HomePage from './page/HomePage';
import AlbumPage from './page/AlbumPage';
import WelcomePage from './page/WelcomePage'
import ArtistsPage from './page/ArtistsPage'

function App() {

  var [token, setToken] = useState('');
  var [userProfile, setUserProfile] = useState('')

  async function getToken() {
    let response = await fetch('/auth/token');
    let json = await response.json();
    setToken(json.access_token);
  }

  async function getUserProfile() {
    let response = await fetch('/user/getUserProfile');
    let json = await response.json();
    setUserProfile(json)
  }

  useEffect(() => {
    if(token === ''){
      getToken();
    }
    if(userProfile === ''){
      getUserProfile()
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/album" element={<AlbumPage token={token}/>}/>
        <Route path="/artists" element={<ArtistsPage token={token} userProfile={userProfile}/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
