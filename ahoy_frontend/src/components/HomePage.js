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

const url = '/api'

function HomePage() {
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
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"/>
      </Helmet>
      <div className="App-Container">
        <div style={topBarStyle}>
          <div style={homeButtonStyleState} onClick={eh.homeButtonClicked} />
          <div style={musicStripStyleState} onClick={eh.musicStripClicked(
            allCardsContainersState, setAllCardsContainersState, playlistAreaStyleState, setplaylistAreaStyleState, musicListStyleState, setMusicListStyleState, mainBodyStyleState, setMainBodyStyleState)} />
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
        
       <div className="container cardLeftDistance">
        <div ref={umbrellaRef}   style={allCardsContainersState.umbrellaStyle}  >
          <Card name="umbrella" css="card-1" click={
          foldedState.umbrellaFolded? foldCardContainer("umbrella", "unfold"):
           foldCardContainer("umbrella", "fold")}/>
          <Card ref={umbrellaCard2Ref} name="cold" css="card-2"/>
          <Card ref={umbrellaCard3Ref} name="hot" css="card-3"/>
        </div>

        <div ref={downCoatRef} style={allCardsContainersState.downCoatStyle} >
          <Card  name="downCoat" css="card-1" click={
          foldedState.downCoatFolded? foldCardContainer("downCoat", "unfold"): foldCardContainer("downCoat", "fold")}/>
          <Card  ref={downCoatCard2Ref} name="cold" css="card-2"/>
          <Card  ref={downCoatCard3Ref} name="hot" css="card-3"/>
        </div>

        <div ref={sweaterRef} style={allCardsContainersState.sweaterStyle}  >
          <Card name="sweater" css="card-1" click={
          foldedState.sweaterFolded? foldCardContainer("sweater", "unfold"): foldCardContainer("sweater", "fold")}/>
          <Card ref={sweaterCard2Ref} name="cold" css="card-2"/>
          <Card ref={sweaterCard3Ref} name="hot" css="card-3"/>
        </div>
          
        <div ref={snowBootRef} style={allCardsContainersState.snowBootStyle} >
          <Card name="snowBoot" css="card-1" click={
          foldedState.snowBootFolded? foldCardContainer("snowBoot", "unfold"): foldCardContainer("snowBoot", "fold")}/>
          <Card ref={snowBootCard2Ref} name="cold" css="card-2"/>
          <Card ref={snowBootCard3Ref} name="hot" css="card-3"/>
        </div>


        <div ref={rainBootRef} style={allCardsContainersState.rainBootStyle} >
          <Card name="rainShoes" css="card-1" click={
          foldedState.rainBootFolded? foldCardContainer("rainBoot", "unfold"): foldCardContainer("rainBoot", "fold")}/>
          <Card ref={rainBootCard2Ref} name="cold" css="card-2"/>
          <Card ref={rainBootCard3Ref} name="hot" css="card-3"/>
        </div>

        <div ref={maskRef} style={allCardsContainersState.maskStyle} >
          <Card name="mask" css="card-1" click={
          foldedState.maskFolded? foldCardContainer("mask", "unfold"): foldCardContainer("mask", "fold")}/>
          <Card ref={maskCard2Ref} name="cloud" css="card-2"/>
          <Card ref={maskCard3Ref} name="hot" css="card-3"/>
        </div>
       </div>
      </div>
    </div>
  );
}

export default HomePage;
