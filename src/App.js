import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import seedColors from './seedColors';
import Palette from './Palette';
import PaletteList from './PaletteList';
import NewPaletteForm from './NewPaletteForm';
import { generatePalette } from './colorHelpers';
import {Route, Switch} from 'react-router-dom';
import SingleColorPalette from './SingleColorPalette';

class App extends Component {
  constructor(props){
    super(props);
    const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
    this.state={
      palettes : savedPalettes || seedColors
    };
    this.savePalette=this.savePalette.bind(this);
    this.findPalette=this.findPalette.bind(this);
    this.deletePalette=this.deletePalette.bind(this);
  }
  
  savePalette(newP){
    this.setState({palettes: [...this.state.palettes, newP]} , this.syncStorage);
  }

  syncStorage(){
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  findPalette(id){
    return this.state.palettes.find(function(palette){
      return palette.id===id;
    });
  }

  deletePalette(id){
    this.setState((st)=>({
      palettes : st.palettes.filter(palette => palette.id !== id)
    }), this.syncStorage);
  }

  render() {
    
    return (
      <div className="App">
        <Switch>
          <Route exact path="/palette/new" render={(routeProps)=><NewPaletteForm 
            {...routeProps} 
            savePalette={this.savePalette}
            palettes={this.state.palettes}
            />}/>
          <Route exact path="/" render={(routeProps)=> <PaletteList palettes={this.state.palettes} {...routeProps} deletePalette={this.deletePalette}/>} />
          <Route exact path="/palette/:id" render={(routeProps)=> (
            <Palette 
              palette={generatePalette(this.findPalette(routeProps.match.params.id))}
            />
          )}/>
          <Route 
            exact path="/palette/:paletteId/:colorId" 
            render={(routeProps)=><SingleColorPalette colorId={routeProps.match.params.colorId} palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}/>}
            
          />
        </Switch>
        {/* <Palette palette={generatePalette(seedColors[4])}/> */}

      </div>
    );
  }
  
}

export default App;
