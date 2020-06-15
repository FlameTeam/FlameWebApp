import React, { useContext } from "react";
import ThemeContext from "./theme-context";

import { Box } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Team from "./components/Team";
import Footer from "./components/Footer";

const FLAME_MAILER_API_URL = process.env.FLAME_MAILER_API_URL;

function App() {
  const theme = useContext(ThemeContext);

  return (
    <ThemeContext.Provider theme={theme}>
      <Box style={theme}>
        <Navbar />
        <Header />
        <Services />
        <Contact flameURL={FLAME_MAILER_API_URL} />
        <Team />
        <Footer />
      </Box>
    </ThemeContext.Provider>
  );
}

export default App;
