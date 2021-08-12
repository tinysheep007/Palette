import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[4])}/>

      </div>
    );
  }
  
}

export default App;
