import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(7);

  // let counter = 7

  const addValue = () => {
    if (counter < 20) {
      counter = counter + 1;
      console.log(counter);
      setCounter(counter);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      counter = counter - 1;
      console.log(counter);
      setCounter(counter);
    }
  };

  return (
    <>
      <h1>😁😁PROJECT DONE😁😁</h1>
      <h1>I am Shawon from Earth.</h1>
      <h2>Counter value: {counter}</h2>

      {/* increase value */}
      <button onClick={addValue}>Add value {counter}</button>

      <br />

      {/* decrase value */}
      <button onClick={removeValue}>Remove value {counter}</button>

      <h2>Footer: {counter}</h2>
    </>
  );
}

export default App;
