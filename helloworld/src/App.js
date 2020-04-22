import React from 'react';
import './App.css';
import Greeting from './Components/Greet';
import Welcome from './Components/Welcome';

function App() {
  return (
    <div className="App">
      <Greeting Name="Balaji"/>
      <Welcome Name="Lakshya"/>
    </div>
  );
}

export default App;
