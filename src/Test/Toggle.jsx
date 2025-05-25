import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);

  // function tg() {
  //   if (toggle == true) {
  //     setToggle(false);
  //   } else {
  //     setToggle(true);
  //   }
  // }
  return (
    <div>
      <h1>Toggle Name</h1>
      <button onClick={() => setToggle(!toggle)}>ToggleBtn</button>
      <h1>
        My name is:
        {toggle ? <span>Giyas Ahmed</span> : null}
      </h1>
    </div>
  );
};

export default Toggle;
