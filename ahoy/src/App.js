import logo from './logo.svg';
import './App.css';
import {useRef} from 'react'


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
    
    console.log(umbreallaRef.current.className)
  }

  return (
    <div className="App">
      <div className="App-header">
       <div className="container">
       <div ref={umbreallaRef} className="cardContainer" id="cardLeftDistance" onClick={expandCard}>
          <div className="card-1 ">Umbrella</div>
          <div className="card-2">Warm</div>
          <div className="card-3">Cold</div>
        </div>
        <div ref={downCoatRef} className="cardContainer"  >
          <div className="card-1 ">Down Coat</div>
          <div className="card-2">Warm</div>
          <div className="card-3">Cold</div>
        </div>

        <div ref={sweaterRef} className="cardContainer"  onClick={onclick}>
          <div className="card-1">Sweater</div>
          <div className="card-2">Warm</div>
          <div className="card-3">Cold</div>
        </div>
          
        <div ref={snowBootRef} className="cardContainer">
          <div className="card-1">Snow Boot</div>
          <div className="card-2">Necessary</div>
          <div className="card-3">Unnecessary</div>
        </div>

        <div ref={rainBootRef} className="cardContainer">
          <div className="card-1">Rain Boot</div>
          <div className="card-2">Necessary</div>
          <div className="card-3">Unnecessary</div>
        </div>

        <div ref={maskRef} className="cardContainer">
          <div className="card-1">Mask</div>
          <div className="card-2">Necessary</div>
          <div className="card-3">Unnecessary</div>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
