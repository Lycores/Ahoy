import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from 'react';
import {Card, umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle} from './card.js';
import requestDesktopData from './allRequest.js';

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

  const foldCardContainer = (componentClicked) => {
    return (event) => {
      switch(componentClicked){
        case "umbrella":
        setAllCardsContainers(
          {...allCardsContainers, umbrellaStyle: {...allCardsContainers.umbrellaStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        umbrellaCard2Ref.current.classList.remove("expandLeft")
        umbrellaCard3Ref.current.classList.remove("expandRight")
        setFolded({...folded, umbrellaFolded: true})
        break;

        case "downCoat":
        setAllCardsContainers(
          {...allCardsContainers, downCoatStyle: {...allCardsContainers.downCoatStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        downCoatCard2Ref.current.classList.remove("expandLeft")
        downCoatCard3Ref.current.classList.remove("expandRight")
        setFolded({...folded, downCoatFolded: true})
        break;

        case "sweater":
        setAllCardsContainers(
          {...allCardsContainers, sweaterStyle: {...allCardsContainers.sweaterStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        sweaterCard2Ref.current.classList.remove("expandLeft")
        sweaterCard3Ref.current.classList.remove("expandRight")
        setFolded({...folded, sweaterFolded: true})
        break;

        case "snowBoot":
        setAllCardsContainers(
          {...allCardsContainers, snowBootStyle: {...allCardsContainers.snowBootStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        snowBootCard2Ref.current.classList.remove("expandLeft")
        snowBootCard3Ref.current.classList.remove("expandRight")
        setFolded({...folded, snowBootFolded: true})
        break;

        case "rainBoot":
        setAllCardsContainers(
          {...allCardsContainers, rainBootStyle: {...allCardsContainers.rainBootStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        rainBootCard2Ref.current.classList.remove("expandLeft")
        rainBootCard3Ref.current.classList.remove("expandRight")
        setFolded({...folded, rainBootFolded: true})
        break;

        case "mask":
        setAllCardsContainers(
          {...allCardsContainers, maskStyle: {...allCardsContainers.maskStyle, marginLeft: "50px", marginRight:"50px"}}
        )
        maskCard2Ref.current.classList.remove("expandLeft")
        maskCard3Ref.current.classList.remove("expandRight")
        setFolded({...folded, maskFolded: true})
        break;
      }
    }
  }

  const clickCardContainer = (componentClicked) => {
    return (event) => {
      switch(componentClicked){
        case "umbrella":
          setAllCardsContainers(
            {...allCardsContainers, umbrellaStyle: {...allCardsContainers.umbrellaStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          umbrellaCard2Ref.current.classList.add("expandLeft")
          umbrellaCard3Ref.current.classList.add("expandRight")
          setFolded({...folded, umbrellaFolded: false})
          break
        case "downCoat":
          setAllCardsContainers(
            {...allCardsContainers, downCoatStyle: {...allCardsContainers.downCoatStyle, marginLeft: "250px", marginRight:"300px"}}
          )

          downCoatCard2Ref.current.classList.add("expandLeft")
          downCoatCard3Ref.current.classList.add("expandRight")
          setFolded({...folded, downCoatFolded: false})
          break
        case "sweater":
          setAllCardsContainers(
            {...allCardsContainers, sweaterStyle: {...allCardsContainers.sweaterStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          sweaterCard2Ref.current.classList.add("expandLeft")
          sweaterCard3Ref.current.classList.add("expandRight")
          setFolded({...folded, sweaterFolded: false})
          break
        case "snowBoot":
          setAllCardsContainers(
            {...allCardsContainers, snowBootStyle: {...allCardsContainers.snowBootStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          snowBootCard2Ref.current.classList.add("expandLeft")
          snowBootCard3Ref.current.classList.add("expandRight")
          setFolded({...folded, snowBootFolded: false})
          break
        case "rainBoot":
          setAllCardsContainers(
            {...allCardsContainers, rainBootStyle: {...allCardsContainers.rainBootStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          rainBootCard2Ref.current.classList.add("expandLeft")
          rainBootCard3Ref.current.classList.add("expandRight")
          setFolded({...folded, rainBootFolded: false})
          break
        case "mask":
          setAllCardsContainers(
            {...allCardsContainers, maskStyle: {...allCardsContainers.maskStyle, marginLeft: "250px", marginRight:"300px"}}
          )
          maskCard2Ref.current.classList.add("expandLeft")
          maskCard3Ref.current.classList.add("expandRight")
          setFolded({...folded, maskFolded: false})
        break
      }
    }
  }
  
  let [allCardsContainers, setAllCardsContainers] = useState({
    umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle
  })

  let [folded, setFolded] = useState({
    umbrellaFolded:true, downCoatFolded:true, sweaterFolded:true, snowBootFolded:true, rainBootFolded:true, maskFolded:true
  })

  useEffect(() => {
    setInterval(()=>{requestDesktopData(url)}, 2000)
  }, [])

  return (
    <div className="App">
      <div className="App-header">
       <div className="container cardLeftDistance">
        <div ref={umbrellaRef}   style={allCardsContainers.umbrellaStyle}  onClick={folded.umbrellaFolded? clickCardContainer("umbrella"): foldCardContainer("umbrella")}>
          <Card name="Umbrella" css="card-1"/>
          <Card ref={umbrellaCard2Ref} name="Good" css="card-2"/>
          <Card ref={umbrellaCard3Ref} name="Good" css="card-3"/>
        </div>

        <div ref={downCoatRef} style={allCardsContainers.downCoatStyle} onClick={folded.downCoatFolded? clickCardContainer("downCoat"): foldCardContainer("downCoat")} >
          <Card  name="downCoatRef" css="card-1"/>
          <Card  ref={downCoatCard2Ref} name="downCoatRef" css="card-2"/>
          <Card  ref={downCoatCard3Ref} name="downCoatRef" css="card-3"/>
        </div>

        <div ref={sweaterRef} style={allCardsContainers.sweaterStyle}  onClick={folded.sweaterFolded? clickCardContainer("sweater"): foldCardContainer("sweater")}>
          <Card name="sweaterRef" css="card-1"/>
          <Card ref={sweaterCard2Ref} name="sweaterRef" css="card-2"/>
          <Card ref={sweaterCard3Ref} name="sweaterRef" css="card-3"/>
        </div>
          
        <div ref={snowBootRef} style={allCardsContainers.snowBootStyle} onClick={folded.snowBootFolded? clickCardContainer("snowBoot"): foldCardContainer("snowBoot")}>
          <Card name="snowBootRef" css="card-1"/>
          <Card ref={snowBootCard2Ref} name="snowBootRef" css="card-2"/>
          <Card ref={snowBootCard3Ref} name="snowBootRef" css="card-3"/>
        </div>


        <div ref={rainBootRef} style={allCardsContainers.rainBootStyle} onClick={folded.rainBootFolded? clickCardContainer("rainBoot"): foldCardContainer("rainBoot")}>
          <Card name="rainBootRef" css="card-1"/>
          <Card ref={rainBootCard2Ref} name="rainBootRef" css="card-2"/>
          <Card ref={rainBootCard3Ref} name="rainBootRef" css="card-3"/>
        </div>

        <div ref={maskRef} style={allCardsContainers.maskStyle} onClick={folded.maskFolded? clickCardContainer("mask"): foldCardContainer("mask")}>
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
