import React from "react";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeName, setThemeName] = useState("dark");

  useEffect(() => {
    const isDark = localStorage.getItem("themeName") === "dark";
    if (isDark) setThemeName("dark");
  }, []);

  const toggleTheme = () => {
    console.log("test");
    const name = themeName === "light" ? "dark" : "light";
    localStorage.setItem("themeName", name);
    setThemeName(name);
  };

  return (
    <ThemeContext.Provider value={[{ themeName, toggleTheme }]}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ThemeProvider, ThemeContext };
