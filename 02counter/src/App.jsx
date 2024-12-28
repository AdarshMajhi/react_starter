import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter,setCounter] = useState (0)

  // let counter =5;

  const addValue = () => {
    setCounter(counter + 1);
  }

  const decreaseValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>counter </h1>
      <h2>counter value : {counter}</h2>

      <button onClick={addValue}>Add Value</button> <br />
      <button onClick ={decreaseValue}>Decrease Value</button>
    </>
  );
}

export default App;
