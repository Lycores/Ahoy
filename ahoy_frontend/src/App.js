import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import HomePage from './page/HomePage';
import PlaylistPage from './page/PlaylistPage';
import WelcomePage from './page/WelcomePage'
import ArtistsPage from './page/ArtistsPage'

function App() {

  var [token, setToken] = useState('');
  async function getToken() {
    const response = await fetch('/auth/token');
    const json = await response.json();
    setToken(json.access_token);
  }

  useEffect(() => {
    if(token === ''){
      getToken();
    }
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/playlist" element={<PlaylistPage token={token}/>}/>
        <Route path="/artists" element={<ArtistsPage token={token}/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
