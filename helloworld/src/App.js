import React from 'react';
import './App.css';
import Greeting from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import EventBinder from './Components/EventBinder';
import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* {/* <Greeting Name="Balaji"/>
      <Welcome Name="Lakshya"/>
      <Message/>
      <Counter/> */}
      {/* <EventBinder/>  */}
      <ParentComponent/>
    </div>
  );
}

export default App;
