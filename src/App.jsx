import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => setCount(0);

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      {count === 0 && <p>Minimum limit reached</p>}

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;