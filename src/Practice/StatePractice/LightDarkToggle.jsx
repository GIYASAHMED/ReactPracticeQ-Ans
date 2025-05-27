import React, { useState } from "react";

const LightDarkToggle = () => {
  const [mode, setMode] = useState(true);

  const changeMode = () => {
    setMode(!mode);
  };
  const backgroundColor = mode ? "white" : "black";
  const color = mode ? "black" : "white";

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "20px",
          backgroundColor,
          color,
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            style={{
              width: "400px",
              height: "250px",
              objectFit: "cover",
              objectPosition: "top",
            }}
            src="https://images.unsplash.com/photo-1523297467724-f6758d7124c5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <button
            style={{
              alignSelf: "flex-start",
              backgroundColor: mode ? "black" : "white",
              color: mode ? "white" : "black",
              outline: "none",
            }}
            onClick={changeMode}
          >
            {mode ? "Switch to Dark mode " : "Switch to Light mode"}
            {/* 👇🏻 Sun moon Remix Icon */}
            {/* {mode ? <i class="ri-moon-line"></i> : <i class="ri-sun-line"></i>} */}
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            textAlign: "left",
            fontSize: "17px",
          }}
        >
          <h2>Hello Coders</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            molestiae corporis error eaque eligendi temporibus optio odio fugit
            debitis numquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            fugit veritatis mollitia sapiente quasi nihil? Ad cum molestias amet
            architecto beatae, mollitia illo quisquam id exercitationem suscipit
            vel sequi soluta.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LightDarkToggle;
