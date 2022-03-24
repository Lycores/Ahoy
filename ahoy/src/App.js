import logo from './logo.svg';
import './App.css';



function App() {

  
  return (
    <div className="App">
      <div className="App-header">
       <div className="container">
        <div className="cardContainer" id="cardLeftDistance" >
          <div className="card-1 ">Down Coat</div>
          <div className="card-2">Warm</div>
          <div className="card-3">Cold</div>
        </div>

        <div className="cardContainer" onClick={onclick}>
          <div className="card-1">Sweater</div>
          <div className="card-2">Warm</div>
          <div className="card-3">Cold</div>
        </div>
          
        <div className="cardContainer">
          <div className="card-1">Snow Boot</div>
          <div className="card-2">Necessary</div>
          <div className="card-3">Unnecessary</div>
        </div>

        <div className="cardContainer">
          <div className="card-1">Rain Boot</div>
          <div className="card-2">Necessary</div>
          <div className="card-3">Unnecessary</div>
        </div>

        <div className="cardContainer">
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
