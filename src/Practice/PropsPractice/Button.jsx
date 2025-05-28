import React from "react";

const Button = ({ label }) => {
  const log = () => {
    console.log(label);
  };
  return (
    <div>
      <button onClick={log}>{label}</button>
    </div>
  );
};

export default Button;
