import React from 'react';
import {withStyles} from '@material-ui/styles';


const styles = {
    root :{
        backgroundColor:"white",
        border:"1px solid black",
        borderRadius:"5px",
        padding:"0.6rem",
        position:"relative",
        overflow:"hidden",
        "&:hover":{
            cursor:"pointer"
        }

    },
    colors:{
        background:"grey"
    },
    title:{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"cetner",
        margin:"0",
        color:"black",
        paddingTop:"0.5rem",
        fontSize:"1rem",
        position:"relative"
    },
    emoji:{
        marginLeft:"0.5rem",
        fontSize:"2rem"
    }
}

function MiniPalette(props){
    const {classes, paletteName, emoji} = props;
    return (
        
        <div className={classes.root}>
            <div className={classes.colors}></div>
            <div className={classes.title}>
                {paletteName}
                <div className={classes.emoji}>{emoji}</div>
            </div>

        </div>

        );
}

export default withStyles(styles)(MiniPalette);