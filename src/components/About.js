import React from 'react';
import './About.css';
import photo from './sid.jpg';
import { fadeInLeft } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
const styles = {
    fadeInLeft: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
    }
  }
class About extends React.Component {
    
    render() {
        return (
            <div className = "App">
            <StyleRoot>
            <div className = "center" style={styles.fadeInLeft}>
            <img src={photo} />
            <h1 style={{fontSize: "6.5rem", fontWeight: "bolder"}}>Hello!</h1>
            <h1>I am Siddharth</h1>
            <div className = "center1">
            <p style={{fontSize: '1.5rem',lineHeight: "1.5"}}>I am a 3rd year B.Tech CSE student at VIT, Chennai. I am a developing developer constantly upgrading my skillset by learning and developing projects. I have intrest in the domains web development (MERN stack), Android app development (Java) and Data analytics (Using R : Beginner level). Besides coding I also enjoy writting technical blogs on topics like new trends, data structures and various algorithms.</p>
            </div>
            </div>
            </StyleRoot>
            </div>
        );
    }
}
export default About; 