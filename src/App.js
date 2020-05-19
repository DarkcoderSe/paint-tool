import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       paint: '',
       clickX: [],
       clickY: [],
       clickDrag: []
    }

  }

  addClick = (x, y, dragging) => {
    this.setState.clickX.push(x);
    this.setState.clickY.push(y);
    this.setState.clickDrag.push(dragging);

  };

  redraw = () => {
    const context = $('#canvas').getContext('2d');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.strokeStyle = '#02b3e4';
    context.lineJoin = 'round';
    context.lineWidth = 5;

    for (let i = 0; i < this.state.clickX.length; i++) {
      context.beginPath();
      if (this.state.clickDrag[i] && i) {
        context.moveTo(this.state.clickX[i - 1], this.state.clickY[i - 1]);
      } else {
        context.moveTo(this.state.clickX[i] - 1, this.state.clickY[i]);
      }
      context.lineTo(this.state.clickX[i], this.state.clickY[i]);
      context.closePath();
      context.stroke();
    }
  };


  render() {
    return (
      <div className="board-container">
        <div id="boardDiv">
          <canvas id="canvas" height="400" width="600"></canvas>
        </div>

        <button id="clearBoardBtn">
          Clear
        </button>
      </div>
    )
  }
}

export default App
