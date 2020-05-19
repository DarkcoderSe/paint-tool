import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="board-container">
        <div id="boardDiv"
          onMouseDown={this.mouseDownHandle}
          onMouseUp={this.mouseUpHandle}
          onMouseMove={this.mouseMoveHandle}
          onMouseLeave={this.mouseLeaveHandle}
        >
          <canvas id="canvas" height="400" width="600"></canvas>
        </div>

      </div>
    )
  }
}

export default App
