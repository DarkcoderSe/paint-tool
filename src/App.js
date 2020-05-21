import React, { Component } from 'react';
import PaintBoard from './components/PaintBoard';
import {Container, Row, Col, Button} from 'react-bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="board-container">
        <PaintBoard />
      </div>
    )
  }
}

export default App
