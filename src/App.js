import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./resources/materialUITheme";

import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Team from "./components/Team";
// import Footer from "./components/Footer";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      {/* <Header />
      <Services />
      <Contact />
      <Team />
      <Footer /> */}
    </ThemeProvider>
  );
};

export default App;
