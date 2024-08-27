import "/Users/danyelaramos/Documents/development/react/state/src/components/counter/Counter.css";
import { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    if (counter < 5) {
      setCounter(counter + 1);
    }
  }

  function handleClick2() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="counter">
      <h1> 1. Counter </h1>
      <button onClick={handleClick2}>-</button>
      <h2>{counter}</h2>
      <button onClick={handleClick}>+</button>
    </div>
  );
}

export default Counter;
