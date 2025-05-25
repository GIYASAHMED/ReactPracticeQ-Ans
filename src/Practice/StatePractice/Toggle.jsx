import React, { useState } from "react";

const Toggle = () => {
  const [Toggle, setToggle] = useState(false);
  return (
    <div>
      <button onClick={() => setToggle(!Toggle)} className="ToggleBtn">
        {Toggle ? "Hide Content" : "Show Content"}
      </button>

      {Toggle ? (
        <p className="ContentP">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, quod
          ducimus commodi adipisci ad quibusdam? Quis non necessitatibus
          expedita? Quibusdam consectetur sint, temporibus obcaecati quasi
          aspernatur libero omnis amet labore, deleniti voluptas et, tempora
          officia dolorem quis recusandae. Consectetur sapiente debitis
          perferendis nulla quibusdam unde? Praesentium eligendi quos eos velit.
          Non adipisci veniam laborum nisi veritatis, harum, at quos commodi
          maxime a amet numquam sit doloremque aliquid dolores nulla quo quasi
          dolorem id consequuntur!😁
        </p>
      ) : null}
    </div>
  );
};

export default Toggle;
