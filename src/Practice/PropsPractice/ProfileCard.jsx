import React from "react";

const ProfileCard = ({ imgUrl, name, age, imgAlt }) => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div
        className="profile"
        style={{
          // maxWidth: "400px",
          width: "400px",
          backgroundColor: "white",
          color: "black",
          textAlign: "left",
          padding: "10px 14px",
          marginBottom: "20px",
        }}
      >
        <img
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "10px",
            objectFit: "cover",
          }}
          src={imgUrl}
          alt={imgAlt}
        />
        <h3>Name: {name}</h3>
        <h3>Age: {age}</h3>
      </div>
    </div>
  );
};

export default ProfileCard;
