import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(false);

  const likeToggle = () => {
    setLike(!like);
  };
  return (
    <div>
      {/* {like ? (
        <div
          className="like"
          onClick={likeToggle}
          style={{ backgroundColor: "red" }}
        >
          {like ? "Liked" : "like"}
          
        </div>
        
      ) : (
        <div
          className="like"
          onClick={likeToggle}
          style={{ backgroundColor: "white", color: "black" }}
        >
          {like ? "Liked" : "like"}
        </div>
      )} */}

      {like ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            class="ri-heart-fill"
            style={{ fontSize: "40px", color: "red" }}
            onClick={likeToggle}
          ></i>
          <span style={{ fontFamily: "cursive" }}>
            {like ? "Liked" : "like"}
          </span>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <i
            class="ri-heart-fill"
            style={{ fontSize: "40px", color: "white" }}
            onClick={likeToggle}
          ></i>
          <span>{like ? "Liked" : "like"}</span>
        </div>
      )}
    </div>
  );
};

export default LikeButton;
