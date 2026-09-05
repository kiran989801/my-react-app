import { useRef, useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return { count, increase, decrease, reset };
}

function AdvancedHooks() {
  const inputRef = useRef(null);
  const { count, increase, decrease, reset } = useCounter();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Advanced Hooks</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your name"
      />

      <button onClick={focusInput}>
        Focus Input
      </button>

      <h2>Counter: {count}</h2>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default AdvancedHooks;