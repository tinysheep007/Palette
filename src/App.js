import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import { generatePalette } from './colorHelpers';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={()=> <h1>main page</h1>} />
          <Route exact path="/palette/:id" render={()=> <h1>palatte</h1>}/>
        </Switch>
        <Palette palette={generatePalette(seedColors[4])}/>

      </div>
    );
  }
  
}

export default App;
