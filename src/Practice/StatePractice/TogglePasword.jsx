import React, { useState } from "react";

const TogglePasword = () => {
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState(false);

  const getPassword = (e) => {
    setPass(e.target.value);
  };
  const checkBtn = () => {
    if (pass !== "") setCheck(!check);
  };
  return (
    <div>
      <input
        type={check ? "text" : "password"}
        onChange={getPassword}
        value={pass}
        placeholder="Enter Your Password..."
      />
      {/* CheckBox */}
      {/* <input type="checkbox" onChange={checkBtn} disabled={pass === ""} />  */}
      {/* This code is for Eye animation 👇🏻 */}
      <div
        onClick={checkBtn}
        className="eye"
        style={{ cursor: pass ? "pointer" : "not-allowed" }}
      >
        {check ? (
          <i class="ri-eye-line"></i>
        ) : (
          <i class="ri-eye-close-line" style={{ color: "red" }}></i>
        )}
      </div>
    </div>
  );
};

export default TogglePasword;
