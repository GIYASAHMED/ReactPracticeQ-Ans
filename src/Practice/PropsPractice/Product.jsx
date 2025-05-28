import React from "react";

const Product = ({ imgUrl, imgAlt, title, des, price }) => {
  return (
    <div>
      <div
        style={{
          width: "270px",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          alignItems: "flex-start",
          backgroundColor: "pink",
          color: "black",
          padding: "10px 15px",
        }}
      >
        <img
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          src={imgUrl}
          alt={imgAlt}
        />
        <h2>Title:{title} </h2>
        <p style={{ maxWidth: "300px", textAlign: "left" }}>{des}</p>
        <h3>Price : {price}</h3>
      </div>
    </div>
  );
};

export default Product;
