import React from 'react';
import { slideInUp } from 'react-animations';
import { zoomIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import './skills.css';
const styles = {
    slideInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    }
}
const styles1 = {
    zoomIn: {
        animation: 'x 2s',
        animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
}
class skill extends React.Component {
    constructor(props)
    {
        super(props);
        this.con = this.props.con;
    }
    render() {
        return (
            <StyleRoot>
            <div className = "skillCard" style = {styles.slideInUp}><StyleRoot><div style = {styles1.zoomIn}>{this.con}</div></StyleRoot>
            </div>
            </StyleRoot>
        );
    }
}
export default skill; 