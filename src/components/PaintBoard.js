import React, { Component } from 'react';

class PaintBoard extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       paint: false,
       clickX: [],
       clickY: [],
       clickDrag: []
    }

  }
  
  mouseDownHandle = (e) => {
    console.log("Mouse Down");
    
    let mouseX = e.pageX - document.getElementById('canvas').offsetLeft;
    let mouseY = e.pageY - document.getElementById('canvas').offsetTop;

    // console.log(`ePage:${e.pageX} offsetLeft:${document.getElementById('canvas').offsetLeft}`);

    this.setState({
      paint: true
    });
    this.addClick(mouseX, mouseY);
    this.redraw();
  }
  mouseMoveHandle = (e) => {
    console.log("Mouse Moving...");
    
    if (this.state.paint) {
      this.addClick(e.pageX - document.getElementById('canvas').offsetLeft, e.pageY - document.getElementById('canvas').offsetTop, true);
      this.redraw();
    }
  }
  mouseUpHandle = (e) => {
    console.log("Mouse Up");
    
    this.setState({
      paint: false
    });
  }
  mouseLeaveHandle = (e) => {
    console.log("Bye Bye...");
    
    this.setState({
      paint: false
    });
  }
  
  addClick = (x, y, dragging) => {
    console.log(`x:${x} y:${y} d:${dragging}`);
    
    var clickXtemp = this.state.clickX.concat(x);
    var clickYtemp = this.state.clickY.concat(y);
    var clickDragtemp = this.state.clickDrag.concat(dragging);

    this.setState({
      clickX: clickXtemp,
      clickY: clickYtemp,
      clickDrag: clickDragtemp
    });

  };

  redraw = () => {
    const context = document.getElementById('canvas').getContext('2d');
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
      <div id="boardDiv"
          onMouseDown={this.mouseDownHandle}
          onMouseUp={this.mouseUpHandle}
          onMouseMove={this.mouseMoveHandle}
          onMouseLeave={this.mouseLeaveHandle}
        >
        <canvas id="canvas" height="400" width="600"></canvas>
      </div>
    )
  }
}

export default PaintBoard
