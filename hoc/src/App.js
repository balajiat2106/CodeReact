import React from 'react';
import logo from './logo.svg';
import './App.css';
import FirstChild from './Components/FirstChild';
import SecondChild from './Components/SecondChild';

function App() {
  return (
    <div className="App">
     <FirstChild/>
     <SecondChild/>
    </div>
  );
}

export default App;
