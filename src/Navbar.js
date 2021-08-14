import React, {Component} from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={ format: "hex", open: false};
        this.handleFormatChange=this.handleFormatChange.bind(this);
        this.closeSnackBar=this.closeSnackBar.bind(this);

    }
    handleFormatChange(e){
        this.setState({ format: e.target.value, open:true});
        this.props.handleChange(e.target.value);
    }
    closeSnackBar(){
        this.setState({ open: false});
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
                    <Select value={format} onChange={this.handleFormatChange}>
                        <MenuItem value="hex">hex (#fffff)</MenuItem>
                        <MenuItem value="rgb">rgb (255,255,255)</MenuItem>
                        <MenuItem value="rgba">rgba (255,255,255,1.0)</MenuItem>
                    </Select>

                </div>
                <Snackbar 
                    anchorOrigin={{vertical:"bottom",horizontal:"left"}}
                    open={this.state.open}
                    autoHideDuration={2500}
                    message={<span id="message-id">format changed to {format.toUpperCase()}!</span>}
                    onClose={this.closeSnackBar}
                    ContentProps={
                        {
                            "aria-describedby": "message-id"
                        }
                    }
                    action={
                        [
                            <IconButton onClick={this.closeSnackBar} color="inherit" key="close" aria-label="close">
                                <CloseIcon/>
                            </IconButton>
                        ]
                    }
                    
                />
            </div>

        )
    }
}

export default Navbar;