import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react';
import {Card, umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle} 
from './card.js';



function App() {
  const umbrellaRef = useRef(null)
  const downCoatRef = useRef(null)
  const sweaterRef = useRef(null)
  const snowBootRef = useRef(null)
  const rainBootRef = useRef(null)
  const maskRef = useRef(null)

  const clickCardContainer = (componentClicked) => {
    return (event) => {
      switch(componentClicked){
        case "umbrella":
          setAllCardsContainers(
            {...allCardsContainers, umbrellaStyle: {...allCardsContainers.umbrellaStyle, marginRight:"300px"}}
          )
          break
        case "downCoat":
          setAllCardsContainers(
            {...allCardsContainers, downCoatStyle: {...allCardsContainers.downCoatStyle, marginRight:"300px"}}
          )
          break
        case "sweater":
          setAllCardsContainers(
            {...allCardsContainers, sweaterStyle: {...allCardsContainers.sweaterStyle, marginRight:"300px"}}
          )
          break
        case "snowBoot":
          setAllCardsContainers(
            {...allCardsContainers, snowBootStyle: {...allCardsContainers.snowBootStyle, marginRight:"300px"}}
          )
          break
        case "rainBoot":
          setAllCardsContainers(
            {...allCardsContainers, rainBootStyle: {...allCardsContainers.rainBootStyle, marginRight:"300px"}}
          )
          break
        case "mask":
          setAllCardsContainers(
            {...allCardsContainers, maskStyle: {...allCardsContainers.maskStyle, marginRight:"300px"}}
          )
        break
      }
    }
  }
  
  let [allCardsContainers, setAllCardsContainers] = useState({
    umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle
  })

  return (
    <div className="App">
      <div className="App-header">
       <div className="container cardLeftDistance">
        <div ref={umbrellaRef}   style={allCardsContainers.umbrellaStyle}  onClick={clickCardContainer("umbrella")}>
          <Card name="Umbrella" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={downCoatRef} style={allCardsContainers.downCoatStyle} onClick={clickCardContainer("downCoat")} >
          <Card name="Down Coat" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={sweaterRef} style={allCardsContainers.sweaterStyle}  onClick={clickCardContainer("sweater")}>
          <Card name="Sweater" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>
          
        <div ref={snowBootRef} style={allCardsContainers.snowBootStyle} onClick={clickCardContainer("snowBoot")}>
          <Card name="Snow Boot" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
          
        </div>

        <div ref={rainBootRef} style={allCardsContainers.rainBootStyle} onClick={clickCardContainer("rainBoot")}>
          <Card name="Rain Boot" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={maskRef} style={allCardsContainers.maskStyle} onClick={clickCardContainer("mask")}>
          <Card name="Mask" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
