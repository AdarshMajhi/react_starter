import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const subtractValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Welcome To Counter</h1>
      <h2>Count : {counter}</h2>

      <button onClick={addValue}>Increase</button>
      <br />
      <button onClick={subtractValue}>Decrease</button>
      <p>Note : Count can't go below 0 and 20 is the max counting</p>
    </>
  );
}

export default App;
