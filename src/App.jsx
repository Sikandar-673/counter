import { useState } from "react";
import Quotes from "./Components/Quotes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="container">
        <h1>Counter App</h1>
        <h2>{count}</h2>

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>

      <Quotes />
    </div>
  );
}

export default App;