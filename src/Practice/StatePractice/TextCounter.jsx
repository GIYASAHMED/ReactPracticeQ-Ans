import React, { useState } from "react";

const TextCounter = () => {
  const [count, setCount] = useState("");

  const TxtCount = (e) => {
    setCount(e.target.value);
  };
  const maxLimitTxt = 20;
  return (
    <div>
      <p style={{ color: "green" }}>Maximum character{maxLimitTxt}</p>
      <h3>Text Count: {count.trim().length} </h3>
      <h3>Text Left: {maxLimitTxt - count.trim().length} </h3>

      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        style={{ padding: "10px" }}
        onChange={TxtCount}
      ></textarea>

      <p>{count}</p>
    </div>
  );
};

export default TextCounter;
