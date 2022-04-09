import '../App.css';
import {useEffect, useRef, useState} from 'react';
import {Helmet} from "react-helmet";
import Card from '../components/CardComponent.js'
import {umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle} from '../stylesheets/cardStyleSheet.js';
import requestDesktopData from '../allRequest.js';
import * as eh from '../eventHandler.js'
import {BrowserRouter, useNavigate} from 'react-router-dom'

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
  }
  
  let [allCardsContainersState, setAllCardsContainersState] = useState({
    umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle
  })

  let [foldedState, setFoldedState] = useState({
    umbrellaFolded:true, downCoatFolded:true, sweaterFolded:true, snowBootFolded:true, rainBootFolded:true, maskFolded:true
  })

  useEffect(() => {
    window.addEventListener('resize', changeGlobalDim);
  }, [])

  const navigate = useNavigate()

  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"/>
      </Helmet>
      <div className="App-Container">

        
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
