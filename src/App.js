import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import { generatePalette } from './colorHelpers';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id===id;
    });
  }

  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={(routeProps)=> <PaletteList palettes={seedColors} {...routeProps}/>} />
          <Route exact path="/palette/:id" render={(routeProps)=> (
            <Palette 
              palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}/>
          <Route exact path="/palette/:paletteID/:colorID" render={()=><h1>works</h1>}/>
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[4])}/> */}

      </div>
    );
  }
  
}

export default App;
