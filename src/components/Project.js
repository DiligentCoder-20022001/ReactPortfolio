import React from 'react';
import './Project.css';
import { fadeInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const styles = {
    fadeInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
  }
class Project extends React.Component {
    
    render() {
        return (
            <div className = "App">
            
            </div>
        );
    }
}
export default Project; 