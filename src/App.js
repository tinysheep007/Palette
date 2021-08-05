import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette {...seedColors[1]}/>

      </div>
    );
  }
  
}

export default App;
