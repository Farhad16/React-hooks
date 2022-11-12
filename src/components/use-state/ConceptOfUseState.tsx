import { useState } from "react";

const ConceptOfUseState = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>React use state</h1>
      <button onClick={increment}>Increase</button>
      <h2>Here is the count: {count}</h2>
      <button onClick={decrease}>Increase</button>
    </div>
  );
};

export default ConceptOfUseState;
