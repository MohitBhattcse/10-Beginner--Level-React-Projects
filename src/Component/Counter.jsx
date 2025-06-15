import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const double = () => setCount(count * count);
  const half = () => setCount(count / 2);

  return (
    <div className="counter-box">
      <h2>The number is {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={double}>Double</button>
      <button onClick={half}>Half</button>
    </div>
  );
};

export default Counter;
