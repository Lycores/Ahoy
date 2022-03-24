import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'
import {Card} from './card.js';



function App() {
  const umbreallaRef = useRef(null)
  const downCoatRef = useRef(null)
  const sweaterRef = useRef(null)
  const snowBootRef = useRef(null)
  const rainBootRef = useRef(null)
  const maskRef = useRef(null)

  const expandCard = () => {
    if(umbreallaRef.current.className.indexOf("expandCard") <= -1){
      umbreallaRef.current.className = umbreallaRef.current.className + " expandCard"
    }
    console.log(umbreallaRef.current)
  }

  return (
    <div className="App">
      <div className="App-header">
       <div className="container">
        <div ref={umbreallaRef} className="cardContainer" id="cardLeftDistance" onClick={expandCard}>
          <Card name="Umbrella" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={downCoatRef} className="cardContainer"  >
          <Card name="Down Coat" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={sweaterRef} className="cardContainer"  onClick={onclick}>
          <Card name="Sweater" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>
          
        <div ref={snowBootRef} className="cardContainer">
          <Card name="Snow Boot" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
          
        </div>

        <div ref={rainBootRef} className="cardContainer">
          <Card name="Rain Boot" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={maskRef} className="cardContainer">
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
