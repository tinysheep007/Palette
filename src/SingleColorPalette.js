import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar'
import PaletteFooter from './PaletteFooter';
import {Link} from 'react-router-dom';
import {withStyles} from '@material-ui/styles';

const styles = {
    Palette : {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },
    PaletteColors :{
        height: "90%"
    },
    PaletteFooter :{
        height: "5vh",
        display: "flex",
        justifyContent: "flex-end",
        backgroundColor: "aquamarine",
        fontWeight: "bold",
        alignItems: "center"
    },
    emoji :{
        margin:"0 1rem",
        fontSize: "1.5rem"
    },
    goBack:{
        width: "20%",
        height:  "50%",
        margin: "0 auto",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        marginBottom: "-4px",
        opacity:"1",
        backgroundColor:"black",
        "& Link":{
            color: "white",
            width: "100px",
            height: "30px",
            position: "absolute",
            display: "inline-block",
            top: "50%",
            bottom: "50%",
            textAlign: "center",
            outline: "none",
            background: "black",
            fontSize: "1rem",
            lineHeight: "30px",
            marginLeft: "-50px",
            marginTop: "-15px",
            color:"aliceblue",
            textTransform: "uppercase",
            textDecoration: "none",
            
        }
    }

}

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