import React from 'react';
import './About.css';
import photo from './sid.jpg';
import Typing from 'react-typing-animation';
import { slideInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
const styles = {
  slideInUp: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInUp, 'slideInUp')
  }
}
class About extends React.Component {

  render() {
    return (
      <div className="App">
        <StyleRoot>
          <div className="center" style={styles.slideInUp}>
            <img src={photo} />
            <h1 style={{ fontSize: "6.5rem", fontWeight: "bolder" }}>Hello!</h1>
            <h1>
              <Typing speed={300}>
                I am Siddharth .
            <Typing.Backspace count={16} />
            I am also know as DiligentCoder .
            <Typing.Backspace count={33} />
            I am a proud Indian !
            <Typing.Backspace count={19} />
            am Siddharth .
          </Typing>
            </h1>            <div className="center1">
              <p style={{ fontSize: '1.5rem', lineHeight: "1.5" }}>I am a 3rd year B.Tech CSE student at VIT, Chennai. I am a developing developer constantly upgrading my skillset by learning and developing projects. I have intrest in the domains web development (MERN stack), Android app development (Java) and Data analytics (Using R : Beginner level). Besides coding I also enjoy writting technical blogs on topics like new trends, data structures and various algorithms.</p>
              
            </div>
          </div>
        </StyleRoot>


      </div>
    );
  }
}
export default About; 