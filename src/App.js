import React, { Component } from 'react';
import Simon from './Simon'
import Options from './Options'

class App extends Component {
  render() {
    return (
      <div>
        <div>
        <div className = "container">
        <h1 className = "d-flex justify-content-center">Simon Game</h1>
    
        </div>
        <Options />
        <Simon />
      </div>
      </div>

    );
  }
}

export default App;
