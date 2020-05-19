import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       
    }

    this.boardIntializer();

  }

  boardIntializer = () => {
    console.log('Board Intialized');
    const canvasContainer = $('#boardDiv');

    const canvas = document.createElement('canvas');
    canvas.setAttribute('width', 600);
    canvas.setAttribute('height', 400);
    canvas.setAttribute('id', 'canvas');

    canvasContainer.appendChild(canvas);

    // if (typeof G_vmlCanvasManager != 'undefined') {
    //   canvas = G_vmlCanvasManager.initElement(canvas);
    // }
    const context = canvas.getContext('2d');
  }

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
