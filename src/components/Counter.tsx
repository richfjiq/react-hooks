import { FC, useState } from 'react';

const Counter: FC = () => {
  const [counter, setCounter] = useState(0);

  const increment = (number: number = 1): void => {
    setCounter(counter + number);
  };

  return (
    <div className="mt-5">
      <h3>useState</h3>
      <h3>Counter:</h3>
      <span>Value: {counter}</span>
      <br />
      <button
        onClick={() => increment(1)}
        className="btn btn-outline-primary mt-2"
      >
        +1
      </button>
      <button
        onClick={() => increment(5)}
        className="btn btn-outline-primary mt-2"
      >
        +5
      </button>

      <button
        onClick={() => setCounter(0)}
        className="btn btn-outline-danger mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
