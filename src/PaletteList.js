import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MiniPalette from './MiniPalette';
import {withStyles} from '@material-ui/styles';
import styles from './styles/PaletteListStyles';

class PaletteList extends Component {
    constructor(props){
        super(props);
        this.goToPalette=this.goToPalette.bind(this);
        
    }
    goToPalette(id){
        this.props.history.push(`/palette/${id}`);
    }
    render(){
        const { palettes, classes} = this.props;
        
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.heading}>React Colors</h1>
                        <Link to="/palette/new">Create New Palette</Link>
                    </nav>
                    <div className={classes.palettes}>
                        {palettes.map((p)=>(<MiniPalette {...p} id={p.id} key={p.id} handleDelete={this.props.deletePalette} handleClick={()=>this.goToPalette(p.id)}/>))}
                    </div>
                </div>
                
                
                {/* {palettes.map((p)=>(<p><Link to={`/palette/${p.id}`}> p.paletteName</Link></p>))} */}
            </div>
        )
    }
}

export default withStyles(styles)(PaletteList);