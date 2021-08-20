import React, {Component} from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
import DeleteIcon from '@material-ui/icons/Delete';


class MiniPalette extends Component{
    constructor(props){
        super(props);
        this.deletePalette=this.deletePalette.bind(this);
    }

    deletePalette(e){
        e.stopPropagation();
        this.props.handleDelete(this.props.id);
        //use this commnad on website's console to get back to original palettes
        //window.localStorage.clear()

    }

    render(){
        const {classes, paletteName, emoji, colors, handleClick} = this.props;
        const miniColorBoxes = colors.map(color=>(
            <div className={classes.miniColor} style={{backgroundColor: color.color}}></div>
        ));
    

        return (
            <div className={classes.root} onClick={handleClick}> 
                <div className={classes.delete}>
                    <DeleteIcon 
                    className={classes.deleteIcon} 
                    style={{transition: "all 3s ease-ini-out"}}
                    onClick={this.deletePalette}
                    />
                </div>
                <div className={classes.colors}>{miniColorBoxes}</div>
                <div className={classes.title}>
                    {paletteName}
                    <div className={classes.emoji}>{emoji}</div>
                </div>

            </div>
        )
    }
    
        
        

        
}

export default withStyles(styles)(MiniPalette);