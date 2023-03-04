import React, { useEffect, useState } from "react";
import "./app.css";
import Post from "./components/Post";
import { ThemeContext, themes } from "./context/ThemeContext";

const App = () => {
  const [theme, setTheme] = useState(themes.light);
  const [backgroundColor, setBackgroundColor] = useState("#fff");

  const handleOnClick = () => {
    theme === themes.light
      ? (setTheme(themes.dark), setBackgroundColor("#333"))
      : (setTheme(themes.light), setBackgroundColor("#fff"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
  }, [backgroundColor]);

  return (
    <ThemeContext.Provider value={{ theme, handleOnClick }}>
      <div>
        <h1 className="text-3xl font-bold text-center">Light Dark Theme</h1>
        <Post theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
