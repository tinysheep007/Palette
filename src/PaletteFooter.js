import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/PaletteFooterStyles';
import { Link } from 'react-router-dom';
function PaletteFooter(props) {
    const { paletteName, emoji, classes } = props;
    return (
        <footer className={classes.PaletteFooter}>
            <Link className={classes.footerHome} to="/">
                {paletteName}
                <span className={classes.emoji}>{emoji}</span>
            </Link>
        </footer>
    )
}

export default withStyles(styles)(PaletteFooter);