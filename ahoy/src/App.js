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
    console.log(useRef)
  }

  const cardContainer = {
    width: '200px',
    height: '200px',
    margin: '50px',
    position:'relative'
  }

  let umbrellaStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

  let downCoatStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

  let sweaterStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

  let snowBootStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

  let rainBootStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

  let maskStyle = {
    ...cardContainer,
    marginRight: '50px'
  }
  return (
    <div className="App">
      <div className="App-header">
       <div className="container cardLeftDistance">
        <div ref={umbreallaRef}   style={umbrellaStyle}  onClick={expandCard}>
          <Card name="Umbrella" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={downCoatRef} style={downCoatStyle}  >
          <Card name="Down Coat" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={sweaterRef} style={sweaterStyle}  onClick={onclick}>
          <Card name="Sweater" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>
          
        <div ref={snowBootRef} style={snowBootStyle}>
          <Card name="Snow Boot" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
          
        </div>

        <div ref={rainBootRef} style={rainBootStyle}>
          <Card name="Rain Boot" css="card-1"/>
          <Card name="Good" css="card-2"/>
          <Card name="Bad" css="card-3"/>
        </div>

        <div ref={maskRef} style={maskStyle}>
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
