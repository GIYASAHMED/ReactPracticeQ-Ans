import React from "react";

const Greeting = ({ name, age }) => {
  return (
    <div>
      <h2>Hello {name}</h2>
      <span>Age{age}</span>
    </div>
  );
};

export default Greeting;
