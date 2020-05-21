import React, { Component } from 'react';
import PaintBoard from './components/PaintBoard';
import {Row, Col, Container} from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Tools from './components/Tools';

class App extends Component {

  clearBoard = () => {
    console.log("Clear Board");
    const context = document.getElementById('canvas').getContext('2d');
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    // paint = false;
    // clickX = [];
    // clickY = [];
    // clickDrag = [];

  }

  render() {
    return (
      <div>
        <Container className="text-center mt-4">
          <h2>Paint Tool</h2>
          <p>A simple paint tool</p>
        </Container>
        <div className="board-container">
          <PaintBoard />
        </div>
        <Container>
          <Row>
            <Col className="justify-content-center">
              <Tools clearBoard={this.clearBoard} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App
