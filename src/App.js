import React,{useState} from 'react';

import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  
    const increment = () => {
      setCounter(counter + 1);
    };
  
    const decrement = () => {
      setCounter(counter - 1);
    };
  return (
    <div className="App">
      <h1>Hello React!</h1>
      <p>This is a simple react app: {counter} </p>
      <button className= "increment" onClick={increment}>Increment</button>
      <button className="decrement" onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
