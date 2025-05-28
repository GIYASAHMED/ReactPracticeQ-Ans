import React from "react";

const Message = ({ msgText, imgLink }) => {
  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <img
        style={{
          width: "60px",
          height: "60px",
          objectFit: "cover",
          borderRadius: "50%",
        }}
        src={imgLink}
        alt=""
      />
      <p style={{ color: "white", fontSize: "22px" }}>{msgText}</p>
    </div>
  );
};

export default Message;
