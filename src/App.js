import React, { useContext } from "react";

import Navbar from "./components/Navbar";

import ThemeContext, { themes } from "./theme-context";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider theme={themes.mainTheme}>
      <div style={theme}>
        <Navbar />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
