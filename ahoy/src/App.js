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
          console.log(allCardsContainers)
      }
    }
  }
  
  const [allCardsContainers, setAllCardsContainers] = useState({
    umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle
  })
  
  return (
    <div className="App">
      <div className="App-header">
       <div className="container cardLeftDistance">
        <div ref={umbrellaRef}   style={umbrellaStyle}  onClick={clickCardContainer("umbrella")}>
          <Card name="Umbrella" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={downCoatRef} style={downCoatStyle} onClick={clickCardContainer("downCoat")} >
          <Card name="Down Coat" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={sweaterRef} style={sweaterStyle}  onClick={clickCardContainer("sweater")}>
          <Card name="Sweater" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>
          
        <div ref={snowBootRef} style={snowBootStyle} onClick={clickCardContainer("snowBoot")}>
          <Card name="Snow Boot" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
          
        </div>

        <div ref={rainBootRef} style={rainBootStyle} onClick={clickCardContainer("rainBoot")}>
          <Card name="Rain Boot" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={maskRef} style={maskStyle} onClick={clickCardContainer("mask")}>
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
