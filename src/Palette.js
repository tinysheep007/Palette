import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Ok from './Ok';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class Palette extends Component{
    constructor(props){
        super(props);
        this.state={
            level:500,
            format:"hex"
        }
        this.changeLevel=this.changeLevel.bind(this);
        this.changeFormat=this.changeFormat.bind(this);
    }
    changeLevel(newlevel){
        this.setState({
            level: newlevel
        });
        
    }
    changeFormat(val){
        this.setState({ format: val});
    }

    render(){
        const {classes} = this.props;
        const {colors, paletteName, emoji,id}= this.props.palette;
        const { level,format } =this.state;
        let colorBoxes = colors[level].map(color => (
            <ColorBox background={color[format]} name={color.name} key={color.id} id={color.id} paletteId={id} showingFullPalette={true}/>
        ));
        return (
            <div className={classes.Palette}>
                <Navbar level= {level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors={true}/>
                
                <div className={classes.PaletteColors}>
                    {colorBoxes}
                   
                    <Ok />
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>

            </div>
        )
    }
}

export default withStyles(styles)(Palette);