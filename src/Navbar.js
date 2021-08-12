import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css'
class Navbar extends Component {
    render(){
        const {level, changeLevel} = this.props;
        return (
            <div className="Navbar">
                <div className="logo">
                    <a herf="/">colors</a>
                </div>
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider 
                            defaultValue={ level }
                            step={100} 
                            min={100} 
                            max={900} 
                            onAfterChange={changeLevel} 
                        />
                    </div>
                </div>
                
            </div>

        )
    }
}

export default Navbar;