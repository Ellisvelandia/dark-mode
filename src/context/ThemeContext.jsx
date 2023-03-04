import { createContext } from "react";

export const themes = {
  dark: {
    name: "dark",
    backgroundColor: "#333",
    textColor: "#fff",
    borderColor: "#fff",
  },
  light: {
    name: "light",
    backgroundColor: "#fff",
    textColor: "#333",
    borderColor: "#333",
  },
};

export const ThemeContext = createContext({});
