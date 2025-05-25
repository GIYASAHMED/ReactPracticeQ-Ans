import React, { useState } from "react";

const TextInput = () => {
  const [text, setText] = useState();

  const inputText = (e) => {
    setText(e.target.value);
  };
  const resetText = () => {
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Type something....."
        onChange={inputText}
        value={text}
      />

      <h2>Text : {text} </h2>
      <button onClick={resetText}>Reset text</button>
    </div>
  );
};

export default TextInput;
