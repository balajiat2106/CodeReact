import React from "react";
import "./App.css";
import FirstChild from "./Components/FirstChild";
import SecondChild from "./Components/SecondChild";

function App() {
  return (
    <div className="App">
      <FirstChild name="Balaji"/>
      <SecondChild name="Sanjeev"/>
    </div>
  );
}

export default App;
