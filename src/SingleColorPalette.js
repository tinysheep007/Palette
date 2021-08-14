import React , {Component} from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this._shades=this.gatherShades(this.props.palette,this.props.colorId);
    }

    gatherShades(palette,colorFilterBy){
        let shades=[];
        let allColors=palette.colors;
        for(let key in allColors){
            shades = shades.concat(
                allColors[key].filter((color) => color.id === colorFilterBy)
            );
        }
        return shades.slice(1);
    }

    render(){
        const colorBox=this._shades.map(color =>(
            <ColorBox 
                key={color.id}
                name={color.name}
                background={color.hex}
                showLink={false}
            />
        ))
        return(
            <div className="Palette">
                <h1>One Color</h1>
                <div className="Palette-Colors">
                    {colorBox}
                </div>
            </div>
        )
    }
}

export default SingleColorPalette;