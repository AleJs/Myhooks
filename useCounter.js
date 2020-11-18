import { useState } from "react";

export const useCounter = (props) => {
  const [counter, setCounter] = useState(props);

  const handleIncrement = (props) => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter + 1);
  };

  const handleReset = () => {
    setCounter(props);
  };
  return {
    counter,
    handleIncrement,
    handleDecrement,
    handleReset,
  };
};
