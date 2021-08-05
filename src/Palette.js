import React , {Component} from 'react';
import ColorBox from './ColorBox';
import Ok from './Ok';
import './Palette.css';
class Palette extends Component{
    

    render(){
        let colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name}/>
        ));
        return (
            <div className="Palette">
                hello world yufuy7
                <div className="Palette-Colors">
                    {colorBoxes}
                   
                    <Ok />
                </div>
            </div>
        )
    }
}

export default Palette;