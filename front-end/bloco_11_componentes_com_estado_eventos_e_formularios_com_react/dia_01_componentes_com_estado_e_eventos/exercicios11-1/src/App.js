import './App.css';
import React from 'react';
import ParaFixar1 from './Components/ParaFixar1';
import ParaFixar2 from './Components/ParaFixar2';

class App extends React.Component { 
  render () {
    return (
      <div>
        <ParaFixar1 />
        <ParaFixar2 />
      </div>
    )
  }
}

export default App;
