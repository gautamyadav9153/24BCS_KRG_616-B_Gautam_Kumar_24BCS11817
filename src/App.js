import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ fontSize: "80px" }}>{count}</h1>
      <button onClick={increment}>+ Increment</button>
      <button onClick={decrement}>− Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;