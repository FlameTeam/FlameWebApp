import React, { useContext } from "react";
import ThemeContext from "./theme-context";

import { Box } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import ScreenSection from "./components/ScreenSection";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider theme={theme}>
      <Box style={theme}>
        <Navbar />
        <Header />
        <ScreenSection type="service" />
        <ScreenSection type="team" />
      </Box>
    </ThemeContext.Provider>
  );
}

export default App;
