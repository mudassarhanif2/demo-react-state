import './index.css';
import React, {useState} from "react";
import ReactDOM from "react-dom";
function Room() {
  const [isLit, setLit] = useState(true);
  let [temp, setTemp] = useState(72);
  

  return(
    <div className={ `room ${isLit ? 'lit': 'dark'}`}>
      The room is {isLit ? 'lit' : 'dark'}
      <br/>
      {isLit? 'The temperature of the room is ':null}{isLit? temp+" F": null}
      <br />
      {isLit? <button onClick= {()=> setTemp(++temp)}>+</button>: null}
      {isLit? <button onClick= {()=> setTemp(--temp)}>-</button>: null}
      <br />
      <button onClick= {()=> setLit(!isLit)}>
        flip
      </button>
      <br/>
      <button onClick= {()=> setLit(true)}>
        ON
      </button>
      <button onClick= {()=> setLit(false)}>
        OFF
      </button>
    </div>
  );
}
ReactDOM.render (
  <Room/>,
  document.getElementById('root')
);
 
//import App from './App';
/*
const Hi = ({name}) => <div>Hello {name}<emp id="a">!</emp></div>;
const Hahi = ({waja}) => <div>Tell, whats your problem.{waja}</div>;
ReactDom.render(
  <Hi name="Mudassar Hanif"/>,
  document.querySelector("#root")
);

ReactDom.render(
   <Hahi waja="Mudassar Hanif"/>,
  document.querySelector("#abc")
);
*/


/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/