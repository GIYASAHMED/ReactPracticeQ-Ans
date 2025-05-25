import React, { useState } from "react";
import Counter from "./Counter";
import Toggle from "./Toggle";
import MultipleCondition from "./MultipleCondition";

const Test = () => {
  const [fruitName, setFruitNmae] = useState("Apple");

  function changeFruitName(fruit) {
    setFruitNmae(fruit);
  }
  return (
    <div>
      <h1>Fruit name: {fruitName}</h1>
      <button onClick={() => changeFruitName("Watermelon")}>
        Change fruit name
      </button>

      <Counter />
      <Toggle />
      <MultipleCondition />
    </div>
  );
};

export default Test;
