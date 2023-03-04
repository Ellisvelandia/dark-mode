import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Post = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div className="my-3 flex flex-col justify-center w-full">
      <h4>Post with {theme.name} theme</h4>
      <button
        className={`p-4 rounded border border-solid ${
          theme.name === "dark"
            ? "bg-white text-black border-black"
            : "bg-black text-white border-white"
        }`}
        style={{
          backgroundColor: theme.backgroundColor,
          borderColor: theme.borderColor,
          color: theme.textColor,
        }}
        onClick={handleOnClick}
      >
        {theme.name === "dark" ? "light" : "dark"}
      </button>
    </div>
  );
};

export default Post;
