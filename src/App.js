import React, { Component } from 'react';
import logo from './images/Game_of_life_animated_glider.gif';
import './css/App.css';
import ControlPanel from './ControlPanel'
import Board from './Board'
import Options from './Options'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Game of Life</h2>
        </div>
        <p className="App-intro">
          <ControlPanel />
          <Board />
          <Options />
        </p>
      </div>
    );
  }
}

export default App;
