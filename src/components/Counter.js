import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [count, setCount] = useState();
  // Your code below

  useEffect(() => {
    const countFromLocalStorage = localStorage.getItem("count") ?? "";
    setCount(Number(countFromLocalStorage));
  }, []);

  useEffect(() => {
    console.log("number saved");
    localStorage.setItem("count", count);
  }, [count]);

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <div>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleIncrement}>Increment</button>
      <p>{count}</p>
    </div>
  );
}

export default Counter;
