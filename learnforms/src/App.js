import React, { PureComponent } from 'react';
import './App.css';
import BasicForm from './components/BasicForm';
import LifeCycleMount from './components/LifeCycleMount';
import LifeCycleUpdate from './components/LifeCycleUpdate';

function App() {
  return (
    <div>
      <BasicForm/>
      <LifeCycleMount/>
      <LifeCycleUpdate/>
    </div>
  );
}

export default App;
