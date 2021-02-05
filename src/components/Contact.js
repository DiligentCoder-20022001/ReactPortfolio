import React from 'react';
import './cards.css';
import { slideInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import {Button} from 'react-bootstrap';
const styles = {
    slideInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    }
}
class exp extends React.Component {
    
    render() {
        return (
            <StyleRoot>
            <div className="center" style={styles.slideInUp}>
            <div className="center1">
            <Button variant="primary" onClick = {() => window.open('https://www.linkedin.com/in/siddharth-s-chandran-1b96311b9/', '_blank')}>LinkedIn</Button>{' '}
            <Button variant="danger" onClick = {() => window.open('mailto:siddharthschandran45@gmail.com', '_blank')}>GMail</Button>{' '}
            <Button variant="success" onClick = {() => window.open('https://github.com/DiligentCoder-20022001', '_blank')}>GitHub</Button>{' '}
              
            </div>
          </div>
            </StyleRoot>
        );
    }
}
export default exp; 