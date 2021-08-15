import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteStyles';

class SingleColorPalette extends Component{
    constructor(props){
        super(props);
        this._shades=this.gatherShades(this.props.palette,this.props.colorId);
        this.state=({ format: "hex"});
        this.changeFormat=this.changeFormat.bind(this);
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

    changeFormat(val){
        this.setState({ format: val});
    }

    render(){
        const {classes} = this.props;
        const { format }=this.state;
        const {paletteName, emoji, id} = this.props.palette;
        const colorBox=this._shades.map(color =>(
            <ColorBox 
                key={color.name}
                name={color.name}
                background={color[format]}
                showingFullPalette={false}
            />
        ))
        return(
            <div className={`SingleColorPalette ${classes.Palette}`}>
                <Navbar handleChange={this.changeFormat} showingAllColors={false}/>
               
                <div className={classes.PaletteColors}>
                    {colorBox}
                    <div className={`${classes.goBack} ColorBox`}>
                        <Link to={`/palette/${id}`} className="back-button">Go Back</Link>
                    </div>
                </div>
                
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        )
    }
}

export default withStyles(styles)(SingleColorPalette);