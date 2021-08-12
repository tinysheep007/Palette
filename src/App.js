import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]));
    return (
      <div className="App">
        <Palette {...seedColors[1]}/>

      </div>
    );
  }
  
}

export default App;
