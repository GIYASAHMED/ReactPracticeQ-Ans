import React, { useState } from "react";

const ChangeBg = () => {
  const [bg, setBg] = useState("WHITE");
  // const change = (color) => {
  //   setBg(color);
  // };

  const change = (e) => {
    let col = e.target.innerHTML;
    setBg(col);
  };
  return (
    <>
      <div className="btns">
        <button onClick={change}>Red</button>
        <button onClick={change}>Green</button>
        <button onClick={change}>Blue</button>
      </div>
      <div className="changeBg" style={{ backgroundColor: bg }}>
        Background:{bg}
      </div>
    </>
  );
};

export default ChangeBg;
