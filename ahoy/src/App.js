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


  const clickCardContainer = (componentClicked) => {
    return (event) => {
      switch(componentClicked){
        case "umbrella":
          setAllCardsContainers(
            {...allCardsContainers, umbrellaStyle: {...allCardsContainers.umbrellaStyle, marginRight:"300px"}}
          )
        
          umbrellaCard2Ref.current.classList.add("expandLeft")
          umbrellaCard3Ref.current.classList.add("expandRight")
          break
        case "downCoat":
          setAllCardsContainers(
            {...allCardsContainers, downCoatStyle: {...allCardsContainers.downCoatStyle, marginRight:"300px"}}
          )

          downCoatCard2Ref.current.classList.add("expandLeft")
          downCoatCard3Ref.current.classList.add("expandRight")

          break
        case "sweater":
          setAllCardsContainers(
            {...allCardsContainers, sweaterStyle: {...allCardsContainers.sweaterStyle, marginRight:"300px"}}
          )

          sweaterCard2Ref.current.classList.add("expandLeft")
          sweaterCard3Ref.current.classList.add("expandRight")
          break
        case "snowBoot":
          setAllCardsContainers(
            {...allCardsContainers, snowBootStyle: {...allCardsContainers.snowBootStyle, marginRight:"300px"}}
          )

          snowBootCard2Ref.current.classList.add("expandLeft")
          snowBootCard3Ref.current.classList.add("expandRight")
          break
        case "rainBoot":
          setAllCardsContainers(
            {...allCardsContainers, rainBootStyle: {...allCardsContainers.rainBootStyle, marginRight:"300px"}}
          )

          rainBootCard2Ref.current.classList.add("expandLeft")
          rainBootCard3Ref.current.classList.add("expandRight")
          break
        case "mask":
          setAllCardsContainers(
            {...allCardsContainers, maskStyle: {...allCardsContainers.maskStyle, marginRight:"300px"}}
          )

          maskCard2Ref.current.classList.add("expandLeft")
          maskCard3Ref.current.classList.add("expandRight")
        break
      }
    }
  }
  
  let [allCardsContainers, setAllCardsContainers] = useState({
    umbrellaStyle, downCoatStyle, sweaterStyle, snowBootStyle, rainBootStyle, maskStyle
  })

  let [umbrellaCardProps, setUmbrellaCardProps] = useState({
    card_1_props: {name: "Umbrella", css: "card-1"},
    card_2_props: {name: "Good", css: "card-2"},
    card_3_props: {name: "Good", css: "card-3"},
  })

  let [downCoatProps, setDownCoatProps] = useState({
    card_1_props: {name: "DownCoat", css: "card-1"},
    card_2_props: {name: "Good", css: "card-2"},
    card_3_props: {name: "Good", css: "card-3"},
  })

  let [sweaterProps, setSweaterProps] = useState({
    card_1_props: {name: "Sweater", css: "card-1"},
    card_2_props: {name: "Good", css: "card-2"},
    card_3_props: {name: "Good", css: "card-3"},
  })

  let [snowBootProps, setSnowBootProps] = useState({
    card_1_props: {name: "SnowBoot", css: "card-1"},
    card_2_props: {name: "Good", css: "card-2"},
    card_3_props: {name: "Good", css: "card-3"},
  })

  let [rainBootProps, setRainBootProps] = useState({
    card_1_props: {name: "RainBoot", css: "card-1"},
    card_2_props: {name: "Good", css: "card-2"},
    card_3_props: {name: "Good", css: "card-3"},
  })

  let [maskProps, setMaskProps] = useState({
    card_1_props: {name: "Mask", css: "card-1"},
    card_2_props: {name: "Good", css: "card-2"},
    card_3_props: {name: "Good", css: "card-3"},
  })

  return (
    <div className="App">
      <div className="App-header">
       <div className="container cardLeftDistance">
        <div ref={umbrellaRef}   style={allCardsContainers.umbrellaStyle}  onClick={clickCardContainer("umbrella")}>
          <Card {...umbrellaCardProps.card_1_props}/>
          <Card ref={umbrellaCard2Ref} {...umbrellaCardProps.card_2_props}/>
          <Card ref={umbrellaCard3Ref}{...umbrellaCardProps.card_3_props}/>
        </div>

        <div ref={downCoatRef} style={allCardsContainers.downCoatStyle} onClick={clickCardContainer("downCoat")} >
          <Card  {...downCoatProps.card_1_props}/>
          <Card  ref={downCoatCard2Ref} {...downCoatProps.card_2_props}/>
          <Card  ref={downCoatCard3Ref} {...downCoatProps.card_3_props}/>
        </div>

        <div ref={sweaterRef} style={allCardsContainers.sweaterStyle}  onClick={clickCardContainer("sweater")}>
          <Card {...sweaterProps.card_1_props}/>
          <Card ref={sweaterCard2Ref} {...sweaterProps.card_2_props}/>
          <Card ref={sweaterCard3Ref} {...sweaterProps.card_3_props}/>
        </div>
          
        <div ref={snowBootRef} style={allCardsContainers.snowBootStyle} onClick={clickCardContainer("snowBoot")}>
          <Card {...snowBootProps.card_1_props}/>
          <Card ref={snowBootCard2Ref} {...snowBootProps.card_2_props}/>
          <Card ref={snowBootCard3Ref} {...snowBootProps.card_3_props}/>
        </div>


        <div ref={rainBootRef} style={allCardsContainers.rainBootStyle} onClick={clickCardContainer("rainBoot")}>
          <Card {...rainBootProps.card_1_props}/>
          <Card ref={rainBootCard2Ref} {...rainBootProps.card_2_props}/>
          <Card ref={rainBootCard3Ref} {...rainBootProps.card_3_props}/>
        </div>

        <div ref={maskRef} style={allCardsContainers.maskStyle} onClick={clickCardContainer("mask")}>
          <Card {...maskProps.card_1_props}/>
          <Card ref={maskCard2Ref} {...maskProps.card_2_props}/>
          <Card ref={maskCard3Ref} {...maskProps.card_3_props}/>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
