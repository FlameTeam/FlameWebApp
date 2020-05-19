import React from "react";
import useNavbar from "./components/useNavbar";

//App can return <Compononents/>
function App() {
  return (
    <React.Fragment>
      <div className="App">
        <h1>Flame Web App</h1>
      </div>
      <useNavbar />
    </React.Fragment>
  );
}

export default App;
