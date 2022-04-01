import './App.css';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import Card from './card.js'
import {umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle} from './stylesheets/cardStyleSheet.js';
import requestDesktopData from './allRequest.js';
import {musicStripStyle, homeButtonStyle, loginButtonStyle, musicStripDistanceLeft, musicStripDistanceRight, topBarStyle} from './stylesheets/topBarStyleSheet.js'
import * as eh from './eventHandler.js'
import {playbackBarStyle, playerStyle, playlistAreaStyle, playerConatinerStyle, musicCoverStyle} from './stylesheets/playlistAreaStyleSheet'
import musicListStyle from './stylesheets/musicListStyleSheet'
import mainBodyStyle from './stylesheets/mainBodyStyleSheet'
import WebPlayback from './WebPlayback'
import {BrowserRouter, Routes, Route, Link, useNavigate} from 'react-router-dom'
import HomePage from './components/HomePage';
import PlaylistPage from './components/PlaylistPage';

const url = '/api'

function App() {
  const umbrellaRef = useRef(null)
  const downCoatRef = useRef(null)
  const sweaterRef = useRef(null)
  const snowBootRef = useRef(null)
  const rainBootRef = useRef(null)
  const maskRef = useRef(null)
  const umbrellaCard2Ref = useRef(null);
  const umbrellaCard3Ref = useRef(null);
  const downCoatCard2Ref = useRef(null);
  const downCoatCard3Ref = useRef(null);
  const sweaterCard2Ref = useRef(null);
  const sweaterCard3Ref = useRef(null);
  const snowBootCard2Ref = useRef(null);
  const snowBootCard3Ref = useRef(null);
  const rainBootCard2Ref = useRef(null);
  const rainBootCard3Ref = useRef(null);
  const maskCard2Ref = useRef(null);
  const maskCard3Ref = useRef(null);
  const homeButtonRef = useRef(null);
  const musicStripRef = useRef(null);
  const loginButtonRef = useRef(null);

  var globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}

  const dictionary = {
    "umbrellaCard2Ref": umbrellaCard2Ref, "umbrellaCard3Ref":umbrellaCard3Ref,
    "downCoatCard2Ref": downCoatCard2Ref, "downCoatCard3Ref": downCoatCard3Ref, 
    "sweaterCard2Ref":sweaterCard2Ref, "sweaterCard3Ref":sweaterCard3Ref,
    "snowBootCard2Ref":snowBootCard2Ref, "snowBootCard3Ref":snowBootCard3Ref,
    "rainBootCard2Ref":rainBootCard2Ref, "rainBootCard3Ref": rainBootCard3Ref,
    "maskCard2Ref":maskCard2Ref, "maskCard3Ref":maskCard3Ref
    }

  const foldCardContainer = (componentClicked, foldUnfold) => {
    return (event) => {
      eh.foldAnyContainer(allCardsContainersState, setAllCardsContainersState, foldedState, setFoldedState, dictionary, componentClicked, foldUnfold)
    }
  }

  const changeGlobalDim = () => {
    globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}
    setMusicStripWidthState({...musicStripStyleState, width: globalDim.globalWidth - musicStripDistanceLeft - musicStripDistanceRight})
  }
  
  let [allCardsContainersState, setAllCardsContainersState] = useState({
    umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle
  })

  let [foldedState, setFoldedState] = useState({
    umbrellaFolded:true, downCoatFolded:true, sweaterFolded:true, snowBootFolded:true, rainBootFolded:true, maskFolded:true
  })

  const [token, setToken] = useState('');
  let [musicStripStyleState, setMusicStripWidthState]  = useState(musicStripStyle)
  let [homeButtonStyleState, sethomeButtonStyleState] = useState(homeButtonStyle)
  let [loginButtonStyleState, setLoginButtonStyleState] = useState(loginButtonStyle)
  let [mainBodyStyleState, setMainBodyStyleState] = useState(mainBodyStyle)
  let [playlistAreaStyleState, setplaylistAreaStyleState] = useState(playlistAreaStyle)
  let [musicListStyleState, setMusicListStyleState] = useState(musicListStyle)
  let [playerStyleState, setPlayerStyleState] = useState(playerStyle)
  let [playerConatinerStyleState, setPlayerConatinerStyleState] = useState(playerConatinerStyle)
  let [musicCoverStyleState, setMusicCoverStyleState] = useState(musicCoverStyle)
  let [playbackBarStyleState, setPlaybackBarStyleState] = useState(playbackBarStyle)

  useEffect(() => {
    setInterval(()=>{requestDesktopData(url)}, 200000)
    window.addEventListener('resize', changeGlobalDim);
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
        <Route path="/" element={<HomePage/>} ></Route>
        <Route path="/playlist" element={<PlaylistPage/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
