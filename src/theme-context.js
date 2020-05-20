import React from "react";

export const themes = {
  mainTheme: {
    fontFamily: "Contrail One",
  },
};

const ThemeContext = React.createContext(themes.mainTheme);

export default ThemeContext;
