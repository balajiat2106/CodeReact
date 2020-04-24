import React from 'react';
import './App.css';
import Greeting from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      <Greeting Name="Balaji"/>
      <Welcome Name="Lakshya"/>
      <Message/>
      <Counter/>
    </div>
  );
}

export default App;
