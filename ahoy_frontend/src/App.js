import './App.css';
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import HomePage from './components/HomePage';
import PlaylistPage from './components/PlaylistPage';
import WelcomePage from './components/WelcomePage'

function App() {

  var [token, setToken] = useState('');
  useEffect(() => {
    // setInterval(()=>{requestDesktopData(url)}, 200000)
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage/>}></Route>
        <Route path="/index" element={<HomePage />}></Route>
        <Route path="/playlist" element={<PlaylistPage token={token}/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
