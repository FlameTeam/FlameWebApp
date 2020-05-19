import React from "react";

import Navbar from "./components/Navbar";

import ThemeContext, { themes } from "./theme-context";

function App() {
  return (
    <ThemeContext.Provider value={themes.mainTheme}>
      <Navbar />
    </ThemeContext.Provider>
  );
}

export default App;
