import React, { Component } from 'react';
import Simon from './Simon'

class App extends Component {
  render() {
    return (
      <div>
        <div className = "d-flex justify-content-center" >
        <h1>Simon Game</h1>
    
        </div>
        <Simon />
      </div>

    );
  }
}

export default App;
