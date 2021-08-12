import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Ok from './Ok';
import Navbar from './Navbar';
import './Palette.css';
class Palette extends Component{
    constructor(props){
        super(props);
        this.state={
            level:500
        }
        this.changeLevel=this.changeLevel.bind(this);
    }
    changeLevel(newlevel){
        this.setState({
            level: newlevel
        });
        
    }
    render(){
        const { level } =this.state;
        let colorBoxes = this.props.palette.colors[level].map(color => (
            <ColorBox background={color.hex} name={color.name}/>
        ));
        return (
            <div className="Palette">
                <Navbar level= {level} changeLevel={this.changeLevel}/>
                
                <div className="Palette-Colors">
                    {colorBoxes}
                   
                    <Ok />
                </div>
            </div>
        )
    }
}

export default Palette;