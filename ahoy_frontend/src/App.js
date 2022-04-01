import './App.css';
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import HomePage from './components/HomePage';
import PlaylistPage from './components/PlaylistPage';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/playlist" element={<PlaylistPage/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
