import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from '@material-ui/styles';
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import styles from './styles/PaletteListStyles';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from '@material-ui/core/Button';

class PaletteList extends Component {
    constructor(props){
        super(props);
        this.state = {
            openDeleteDialog: false,
            deletingId: ""
        };
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
        this.reset = this.reset.bind(this);
    }

    openDialog(id) {
        this.setState({ openDeleteDialog: true, deletingId: id });
    }

    closeDialog() {
        this.setState({openDeleteDialog: false, deletingId: "" });
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    handleDelete() {
        this.props.deletePalette(this.state.deletingId);
        this.closeDialog();
    }

    reset(){
        window.localStorage.clear();
        window.location.reload();
    }

    intro(){
        alert("Welcome! Click da palette and copy you fav color and use it anywhere! Maybe you want to make your own palette! (Not recommended for mobile user)");
    }

    render() {
        const { palettes, classes, deletePalette } = this.props;
        const { openDeleteDialog, deletingId } = this.state;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>Da Palette</h1>
                        <Link to="/palette/new" class={classes.createBtn}>Create Palette</Link>
                        <Button className={classes.resetBtn} onClick={this.reset} variant="contained" color="secondary"> Reset </Button>
                        <section className={classes.secondaryNav}>
                            <Button variant="contained" color="primary" onClick={this.intro}>About</Button>
                        </section>
                    </nav>
                        
                        <TransitionGroup className={classes.palettes}>
                            {palettes.map(palette => (
                                <CSSTransition key={palette.id} classNames="fade" timeout={500}>
                                    <MiniPalette 
                                        {...palette} 
                                        goToPalette={this.goToPalette} 
                                        //handleDelete={deletePalette}
                                        openDialog={this.openDialog}
                                        key={palette.id}
                                        id={palette.id}
                                    />
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                </div>
                <Dialog 
                    open={ openDeleteDialog } 
                    aria-labelledby="delete-dialog-title" 
                    onClose={this.closeDialog}
                >
                    <DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar 
                                    style={{ backgroundColor: blue[100], color: blue[600] }}
                                >
                                    <CheckIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Delete" />
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar
                                    style={{ backgroundColor: red[100], color: red[600] }}
                                >
                                    <CloseIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Cancel" />
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);