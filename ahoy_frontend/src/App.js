import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from 'react';
import {Card, umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle} from './card.js';
import requestDesktopData from './allRequest.js';
import {musicStripStyle, homeButtonStyle, loginButtonStyle} from './headBanner.js'
import * as eh from './eventHandler.js'
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

  const foldCardContainer = (componentClicked) => {
    return (event) => {
      switch(componentClicked){
        case "umbrella":
        setAllCardsContainersState(
          {...allCardsContainersState, umbrellaStyle: {...allCardsContainersState.umbrellaStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        umbrellaCard2Ref.current.classList.remove("expandLeft")
        umbrellaCard3Ref.current.classList.remove("expandRight")
        setFoldedState({...foldedState, umbrellaFolded: true})
        break;

        case "downCoat":
        setAllCardsContainersState(
          {...allCardsContainersState, downCoatStyle: {...allCardsContainersState.downCoatStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        downCoatCard2Ref.current.classList.remove("expandLeft")
        downCoatCard3Ref.current.classList.remove("expandRight")
        setFoldedState({...foldedState, downCoatFolded: true})
        break;

        case "sweater":
        setAllCardsContainersState(
          {...allCardsContainersState, sweaterStyle: {...allCardsContainersState.sweaterStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        sweaterCard2Ref.current.classList.remove("expandLeft")
        sweaterCard3Ref.current.classList.remove("expandRight")
        setFoldedState({...foldedState, sweaterFolded: true})
        break;

        case "snowBoot":
        setAllCardsContainersState(
          {...allCardsContainersState, snowBootStyle: {...allCardsContainersState.snowBootStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        snowBootCard2Ref.current.classList.remove("expandLeft")
        snowBootCard3Ref.current.classList.remove("expandRight")
        setFoldedState({...foldedState, snowBootFolded: true})
        break;

        case "rainBoot":
        setAllCardsContainersState(
          {...allCardsContainersState, rainBootStyle: {...allCardsContainersState.rainBootStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        rainBootCard2Ref.current.classList.remove("expandLeft")
        rainBootCard3Ref.current.classList.remove("expandRight")
        setFoldedState({...foldedState, rainBootFolded: true})
        break;

        case "mask":
        setAllCardsContainersState(
          {...allCardsContainersState, maskStyle: {...allCardsContainersState.maskStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        maskCard2Ref.current.classList.remove("expandLeft")
        maskCard3Ref.current.classList.remove("expandRight")
        setFoldedState({...foldedState, maskFolded: true})
        break;
      }
    }
  }

  const clickCardContainer = (componentClicked) => {
    return (event) => {
      switch(componentClicked){
        case "umbrella":
          setAllCardsContainersState(
            {...allCardsContainersState, umbrellaStyle: {...allCardsContainersState.umbrellaStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          umbrellaCard2Ref.current.classList.add("expandLeft")
          umbrellaCard3Ref.current.classList.add("expandRight")
          setFoldedState({...foldedState, umbrellaFolded: false})
          break
        case "downCoat":
          setAllCardsContainersState(
            {...allCardsContainersState, downCoatStyle: {...allCardsContainersState.downCoatStyle, marginLeft: "250px", marginRight:"300px"}}
          )

          downCoatCard2Ref.current.classList.add("expandLeft")
          downCoatCard3Ref.current.classList.add("expandRight")
          setFoldedState({...foldedState, downCoatFolded: false})
          break
        case "sweater":
          setAllCardsContainersState(
            {...allCardsContainersState, sweaterStyle: {...allCardsContainersState.sweaterStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          sweaterCard2Ref.current.classList.add("expandLeft")
          sweaterCard3Ref.current.classList.add("expandRight")
          setFoldedState({...foldedState, sweaterFolded: false})
          break
        case "snowBoot":
          setAllCardsContainersState(
            {...allCardsContainersState, snowBootStyle: {...allCardsContainersState.snowBootStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          snowBootCard2Ref.current.classList.add("expandLeft")
          snowBootCard3Ref.current.classList.add("expandRight")
          setFoldedState({...foldedState, snowBootFolded: false})
          break
        case "rainBoot":
          setAllCardsContainersState(
            {...allCardsContainersState, rainBootStyle: {...allCardsContainersState.rainBootStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          rainBootCard2Ref.current.classList.add("expandLeft")
          rainBootCard3Ref.current.classList.add("expandRight")
          setFoldedState({...foldedState, rainBootFolded: false})
          break
        case "mask":
          setAllCardsContainersState(
            {...allCardsContainersState, maskStyle: {...allCardsContainersState.maskStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          maskCard2Ref.current.classList.add("expandLeft")
          maskCard3Ref.current.classList.add("expandRight")
          setFoldedState({...foldedState, maskFolded: false})
        break
      }
    }
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

  useEffect(() => {
    setInterval(()=>{requestDesktopData(url)}, 2000)
    window.addEventListener('resize', eh.changeSizeOfMusicStrip);
    
  }, [])

  return (
    <div>
      <div className="App-header">
        <div id="head">
          <div style={homeButtonStyleState} onClick={eh.homeButtonClicked} />
          <div style={musicStripStyleState} onClick={eh.musicStripClicked(allCardsContainersState, setAllCardsContainersState)} />
          <div style={loginButtonStyleState} onClick={eh.loginButtonClicked} />
        </div>
       <div className="container cardLeftDistance">
        <div ref={umbrellaRef}   style={allCardsContainersState.umbrellaStyle}  onClick={foldedState.umbrellaFolded? clickCardContainer("umbrella"): foldCardContainer("umbrella")}>
          <Card name="Umbrella" css="card-1"/>
          <Card ref={umbrellaCard2Ref} name="Good" css="card-2"/>
          <Card ref={umbrellaCard3Ref} name="Good" css="card-3"/>
        </div>

        <div ref={downCoatRef} style={allCardsContainersState.downCoatStyle} onClick={foldedState.downCoatFolded? clickCardContainer("downCoat"): foldCardContainer("downCoat")} >
          <Card  name="downCoatRef" css="card-1"/>
          <Card  ref={downCoatCard2Ref} name="downCoatRef" css="card-2"/>
          <Card  ref={downCoatCard3Ref} name="downCoatRef" css="card-3"/>
        </div>

        <div ref={sweaterRef} style={allCardsContainersState.sweaterStyle}  onClick={foldedState.sweaterFolded? clickCardContainer("sweater"): foldCardContainer("sweater")}>
          <Card name="sweaterRef" css="card-1"/>
          <Card ref={sweaterCard2Ref} name="sweaterRef" css="card-2"/>
          <Card ref={sweaterCard3Ref} name="sweaterRef" css="card-3"/>
        </div>
          
        <div ref={snowBootRef} style={allCardsContainersState.snowBootStyle} onClick={foldedState.snowBootFolded? clickCardContainer("snowBoot"): foldCardContainer("snowBoot")}>
          <Card name="snowBootRef" css="card-1"/>
          <Card ref={snowBootCard2Ref} name="snowBootRef" css="card-2"/>
          <Card ref={snowBootCard3Ref} name="snowBootRef" css="card-3"/>
        </div>


        <div ref={rainBootRef} style={allCardsContainersState.rainBootStyle} onClick={foldedState.rainBootFolded? clickCardContainer("rainBoot"): foldCardContainer("rainBoot")}>
          <Card name="rainBootRef" css="card-1"/>
          <Card ref={rainBootCard2Ref} name="rainBootRef" css="card-2"/>
          <Card ref={rainBootCard3Ref} name="rainBootRef" css="card-3"/>
        </div>

        <div ref={maskRef} style={allCardsContainersState.maskStyle} onClick={foldedState.maskFolded? clickCardContainer("mask"): foldCardContainer("mask")}>
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
