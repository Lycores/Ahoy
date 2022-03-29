import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from 'react';
import {Card, umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle} from './cardStyleSheet.js';
import requestDesktopData from './allRequest.js';
import {musicStripStyle, homeButtonStyle, loginButtonStyle, musicStripDistanceLeft, musicStripDistanceRight, topBarStyle} from './topBarStyleSheet.js'
import * as eh from './eventHandler.js'
import foldAnyContainer from './setService.js'
import playListStyle from './playlistStyleSheet'
import albumListStyle from './albumListStyleSheet'
import mainBodyStyle from './mainBodyStyle'
import footerStyle from './footerStyleSheet'
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
    
      foldAnyContainer(allCardsContainersState, setAllCardsContainersState, foldedState, setFoldedState, dictionary, componentClicked, foldUnfold)
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

  let [musicStripStyleState, setMusicStripWidthState]  = useState(musicStripStyle)
  let [homeButtonStyleState, sethomeButtonStyleState] = useState(homeButtonStyle)
  let [loginButtonStyleState, setLoginButtonStyleState] = useState(loginButtonStyle)
  let [mainBodyStyleState, setMainBodyStyleState] = useState(mainBodyStyle)
  let [playListStyleState, setplayListStyleState] = useState(playListStyle)
  let [albumListStyleState, setAlbumListStyleState] = useState(albumListStyle)

  useEffect(() => {
    setInterval(()=>{requestDesktopData(url)}, 200000)
    window.addEventListener('resize', changeGlobalDim);
    
  }, [])

  return (
    <div>
      <div className="App-Container">
        <div style={topBarStyle}>
          <div style={homeButtonStyleState} onClick={eh.homeButtonClicked} />
          <div style={musicStripStyleState} onClick={eh.musicStripClicked(
            allCardsContainersState, setAllCardsContainersState, playListStyleState, setplayListStyleState, albumListStyleState, setAlbumListStyleState, mainBodyStyleState, setMainBodyStyleState)} />
          <div style={loginButtonStyleState} onClick={eh.loginButtonClicked} />
        </div>
        <div style={mainBodyStyleState}>
          <div style={playListStyleState} />
          <div style={albumListStyleState} />
        </div>
        
       <div className="container cardLeftDistance">
        <div ref={umbrellaRef}   style={allCardsContainersState.umbrellaStyle}  onClick={
          foldedState.umbrellaFolded? foldCardContainer("umbrella", "unfold"): foldCardContainer("umbrella", "fold")}>
          <Card name="Umbrella" css="card-1"/>
          <Card ref={umbrellaCard2Ref} name="Good" css="card-2"/>
          <Card ref={umbrellaCard3Ref} name="Good" css="card-3"/>
        </div>

        <div ref={downCoatRef} style={allCardsContainersState.downCoatStyle} onClick={
          foldedState.downCoatFolded? foldCardContainer("downCoat", "unfold"): foldCardContainer("downCoat", "fold")} >
          <Card  name="downCoatRef" css="card-1"/>
          <Card  ref={downCoatCard2Ref} name="downCoatRef" css="card-2"/>
          <Card  ref={downCoatCard3Ref} name="downCoatRef" css="card-3"/>
        </div>

        <div ref={sweaterRef} style={allCardsContainersState.sweaterStyle}  onClick={
          foldedState.sweaterFolded? foldCardContainer("sweater", "unfold"): foldCardContainer("sweater", "fold")}>
          <Card name="sweaterRef" css="card-1"/>
          <Card ref={sweaterCard2Ref} name="sweaterRef" css="card-2"/>
          <Card ref={sweaterCard3Ref} name="sweaterRef" css="card-3"/>
        </div>
          
        <div ref={snowBootRef} style={allCardsContainersState.snowBootStyle} onClick={
          foldedState.snowBootFolded? foldCardContainer("snowBoot", "unfold"): foldCardContainer("snowBoot", "fold")}>
          <Card name="snowBootRef" css="card-1"/>
          <Card ref={snowBootCard2Ref} name="snowBootRef" css="card-2"/>
          <Card ref={snowBootCard3Ref} name="snowBootRef" css="card-3"/>
        </div>


        <div ref={rainBootRef} style={allCardsContainersState.rainBootStyle} onClick={
          foldedState.rainBootFolded? foldCardContainer("rainBoot", "unfold"): foldCardContainer("rainBoot", "fold")}>
          <Card name="rainBootRef" css="card-1"/>
          <Card ref={rainBootCard2Ref} name="rainBootRef" css="card-2"/>
          <Card ref={rainBootCard3Ref} name="rainBootRef" css="card-3"/>
        </div>

        <div ref={maskRef} style={allCardsContainersState.maskStyle} onClick={
          foldedState.maskFolded? foldCardContainer("mask", "unfold"): foldCardContainer("mask", "fold")}>
          <Card name="maskRef" css="card-1"/>
          <Card ref={maskCard2Ref} name="maskRef" css="card-2"/>
          <Card ref={maskCard3Ref} name="maskRef" css="card-3"/>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
