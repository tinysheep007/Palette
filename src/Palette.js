import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Ok from './Ok';

import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
//so the style doesnt get overwrite by thr default style of other libarary's
import './Palette.css';
class Palette extends Component{
    constructor(props){
        super(props);
        this.state={
            level:500
        }
        this.changeLevel=this.changeLevel.bind(this);
    }
    changeLevel(newlevel){
        this.setState({
            level: newlevel
        });
        
    }
    render(){
        const { level } =this.state;
        let colorBoxes = this.props.palette.colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name}/>
        ));
        return (
            <div className="Palette">
                Slider
                <div className="slider">
                    <Slider 
                        defaultValue={ level }
                        step={100} 
                        min={100} 
                        max={900} 
                        onAfterChange={this.changeLevel} 
                    />
                </div>
                
                <div className="Palette-Colors">
                    {colorBoxes}
                   
                    <Ok />
                </div>
            </div>
        )
    }
}

export default Palette;