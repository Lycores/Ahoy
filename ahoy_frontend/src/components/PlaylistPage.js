import '../App.css';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import Card from '../card.js'
import {umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle} from '../stylesheets/cardStyleSheet.js';
import requestDesktopData from '../allRequest.js';
import {musicStripStyle, homeButtonStyle, loginButtonStyle, musicStripDistanceLeft, musicStripDistanceRight, topBarStyle} from '../stylesheets/topBarStyleSheet.js'
import * as eh from '../eventHandler.js'
import {playbackBarStyle, playerStyle, playlistAreaStyle, playerConatinerStyle, musicCoverStyle} from '../stylesheets/playlistAreaStyleSheet'
import musicListStyle from '../stylesheets/musicListStyleSheet'
import mainBodyStyle from '../stylesheets/mainBodyStyleSheet'
import WebPlayback from '../WebPlayback'
import {BrowserRouter, useNavigate} from 'react-router-dom'
const url = '/api'

function PlaylistPage() {
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

  const changeGlobalDim = () => {
    globalDim = {globalHeight: window.innerHeight, globalWidth: window.innerWidth}
    setMusicStripWidthState({...musicStripStyleState, width: globalDim.globalWidth - musicStripDistanceLeft - musicStripDistanceRight})
  }

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
    // setInterval(()=>{requestDesktopData(url)}, 200000)
    window.addEventListener('resize', changeGlobalDim);
    async function getToken() {
      const response = await fetch('/auth/token');
      const json = await response.json();
      setToken(json.access_token);
    }

    getToken();
  }, [])

  const navigate = useNavigate()
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"/>
      </Helmet>
      <div className="App-Container">
        <div style={topBarStyle}>
          <div style={homeButtonStyleState} onClick={eh.homeButtonClicked} />
          <div style={musicStripStyleState} onClick={() => {navigate('/')}} />
            <a href="/auth/login">
              <div style={loginButtonStyleState}/>
            </a>
        </div>
        <div style={mainBodyStyleState}>
          <div style={playlistAreaStyleState} >
            <div style={playerStyleState}>
              <div style={playerConatinerStyleState}>
                { (token === '') ? <></> : <WebPlayback token={token} musicCoverStyleState={musicCoverStyleState} playbackBarStyleState= {playbackBarStyleState} /> }
              </div>
            </div>
          </div>
          <div style={musicListStyleState} />
        </div>
      </div>
    </div>
  );
}

export default PlaylistPage;
