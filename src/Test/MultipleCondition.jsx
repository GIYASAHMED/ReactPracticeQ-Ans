import React, { useState } from "react";

const MultipleCondition = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Multiple Condition </h1>
      <button onClick={() => setCount(count + 1)}>Count</button>
      {count == 0 ? (
        <span>Condition {count} hello Mr giyas </span>
      ) : count == 1 ? (
        <span>Condition {count} welcome to React 19</span>
      ) : count == 2 ? (
        <span>Condition{count} hope you learning well!</span>
      ) : (
        <span>Thank you</span>
      )}
    </div>
  );
};

export default MultipleCondition;
