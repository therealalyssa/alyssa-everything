import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [subCount, subSetCount] = useState(100);

  function updateCount() {
    setCount(count + 1);
  }

  function updateSetCount() {
    subSetCount(subCount - 1);
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={updateCount}>Update Count</button>
      <div>Subtract: {subCount}</div>
      <button onClick={updateSetCount}>Subtract Count</button>
    </div>
  );
}
