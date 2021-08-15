import React, {Component} from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import chroma from 'chroma-js';
import {withStyles} from '@material-ui/styles';
import styles from './styles/ColorBoxStyles';


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