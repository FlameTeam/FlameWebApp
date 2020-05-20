import React, { useContext } from "react";

import Navbar from "./components/Navbar";

import ThemeContext, { themes } from "./theme-context";

function App() {
  const themeImport = useContext(ThemeContext);

  return (
    <ThemeContext.Provider value={themes.mainTheme}>
      <div style={themeImport}>
        <Navbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
