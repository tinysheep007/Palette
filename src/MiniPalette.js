import React from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';



function MiniPalette(props){
    const {classes, paletteName, emoji,colors} = props;
    const miniColorBoxes = colors.map(color=>(
        <div className={classes.miniColor} style={{backgroundColor: color.color}}></div>
    ));
    return (
        
        <div className={classes.root} onClick={props.handleClick}> 
            <div className={classes.colors}>{miniColorBoxes}</div>
            <div className={classes.title}>
                {paletteName}
                <div className={classes.emoji}>{emoji}</div>
            </div>

        </div>

        );
}

export default withStyles(styles)(MiniPalette);