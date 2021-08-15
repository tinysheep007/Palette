import React, {Component} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import chroma from 'chroma-js';
import {withStyles} from '@material-ui/styles';

const styles = {
    ColorBox: {
        width: "20%",
        height: props => (props.showingFullPalette ? "25%" : "50%"),
        margin: "0 auto",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
        marginBottom: "-4px",
        "&:hover button":{
            opacity:"1"
        }
    },
    copyText :{
        color: props => chroma(props.background).luminance() >= 1 ? "black" : "white"
    },
    colorName:{
        color: props => chroma(props.background).luminance() <= 0.1 ? "white" : "black"
    },
    seeMore :{
        color: props => chroma(props.background).luminance() >= 0.07 ? "black" : "white",
        background: "pink",
        position: "absolute",
        border: "none",
        bottom: "0px",
        right: "0px",
        textAlign: "center",
        lineHeight: "30px"
    },
    copyButton :{
        color: props => chroma(props.background).luminance() >= 0.07 ? "black" : "white",
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
        opacity:"0"
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "15px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.5s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMessage :{
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4rem",
        opacity: "0",
        transform: "scale(0.1)",
        color: "white",
        "& h1":{
            fontWeight: "450",
            textShadow: "3px 5px brown",
            background: "rgba(255, 255, 255, 0.3)",
            width: "100%",
            textAlign: "center",
            marginBottom: "0",
            padding: "2rem"
        },
        "& p":{
            fontSize: "2rem",
            fontWeight: "250"
        }
    },
    showMessage :{
        opacity: "1",
        transform: "scale(1)",
        zIndex: "25",
        transition: "all 0.4 ease-in-out",
        transitionDelay: "0.2s"
    }

}

class ColorBox extends Component {
    constructor(props){
        super(props);
        this.state={ copied : false};
        this.changeCopyState=this.changeCopyState.bind(this);
    }
    changeCopyState(){
        this.setState({ copied:true }, ()=>{
            setTimeout(() => {
                this.setState({copied:false})
            }, 1500);
        });
    }

    render() {
        const {name, background, paletteId, id, showingFullPalette, classes} = this.props;
        const {copied} = this.state;
        
        return (
            <CopyToClipboard text={background} onCopy={this.changeCopyState}> 
                <div className={classes.ColorBox}  style={{background}}>
                    <div style={{background}} className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} />
                    <div className={`${classes.copyMessage} ${copied && classes.showMessage}`} >
                        <h1>Copied!</h1>
                        <p className={classes.copyText}>{this.props.background}</p>
                    </div>
                    <div className="copy-container">
                        <div className={classes.boxContent}> 
                            <span className={classes.colorName}>{name}</span>
                        </div>
                        <button className={classes.copyButton}>Copy</button>
                    </div>
                    { showingFullPalette && 
                        (
                            <Link to={`/palette/${paletteId}/${id}`} onClick={(e)=>e.stopPropagation()} >
                                <div className={classes.seeMore}>More</div>
                            </Link>
                        )
                    }
                    
                    
                </div>
            </CopyToClipboard>
            


        )
    }
}

export default withStyles(styles)(ColorBox);