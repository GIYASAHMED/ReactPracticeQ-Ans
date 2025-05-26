import React, { useState } from "react";

const TogglePasword = () => {
  const [pass, setPass] = useState();

  const getPassword = (e) => {};
  return (
    <div>
      <input type="password" onChange={getPassword} />
      <button>Show Password</button>
    </div>
  );
};

export default TogglePasword;
