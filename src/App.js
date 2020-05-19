import React from "react";
import Navbar from "./components/Navbar";

//App can return <Compononents/>
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Flame Web App</h1>
      </div>
      <Navbar />
    </React.Fragment>
  );
}

export default App;
