import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const subtractValue = () => {
    setCounter(counter - 1);
  }
 
  return (
    <>
      <h1>Welcome To Counter</h1>
      <h2>Count : {counter}</h2>

      <button onClick={addValue}>Increase</button> 
      <br />
      <button onClick={subtractValue}>Decrease</button>
    </>
  );
}

export default App;
