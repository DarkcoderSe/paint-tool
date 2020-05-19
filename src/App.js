import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="board-container">
        <div id="boardDiv"></div>

        <button id="clearBoardBtn">
          Clear
        </button>
      </div>
    )
  }
}

export default App
