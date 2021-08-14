import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={ format: "hex"};
        this.handleChange=this.handleChange.bind(this);

    }
    handleChange(e){
        this.setState({ format: e.target.value});
        this.props.handleChange(e.target.value);
    }
    render(){
        const {level, changeLevel, handleChange} = this.props;
        const { format } = this.state;
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
                <div className="selector">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">hex (#fffff)</MenuItem>
                        <MenuItem value="rgb">rgb (255,255,255)</MenuItem>
                        <MenuItem value="rgba">rgba (255,255,255,1.0)</MenuItem>
                    </Select>

                </div>
            </div>

        )
    }
}

export default Navbar;