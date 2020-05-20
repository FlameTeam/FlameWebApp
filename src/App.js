import React, { useContext } from "react";
import ThemeContext from "./theme-context";

import { Box } from "@material-ui/core";
import Navbar from "./components/Navbar";

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider theme={theme}>
      <Box style={theme}>
        <Navbar />
      </Box>
    </ThemeContext.Provider>
  );
}

export default App;
