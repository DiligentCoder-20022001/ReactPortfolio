import React from 'react';
import './cards.css';
import { slideInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
const styles = {
    slideInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    }
}
class exp extends React.Component {
    constructor(props)
    {
        super(props);
        this.company = this.props.company;
        this.position = this.props.position;
        this.tag = this.props.tag;
        this.period = this.props.period;
        this.src = this.props.src;
    }
    render() {
        return (
            <StyleRoot>
            <div style ={styles.slideInUp}>
            <div classNameName="center" style ={{fontFamily:'PT Sans Narrow, sans-serif', paddingTop: '2%', paddingBottom: '2%'}}>
                    <div className="card-container">
                        <span className="pro">{this.tag}</span>
                        <img className="round" src={this.props.src} alt="user" />
                        <h1 style={{fontWeight: "bolder",fontSize: '3rem',lineHeight: '1.5'}}>{this.company}</h1>
                        <p style = {{fontWeight: "bolder", fontSize: '1rem'}}>{this.period}</p>
                        <p style = {{fontSize: '2.5rem'}}>{this.position}</p>
                        <br></br>
                    </div>



            </div>
            </div>
            </StyleRoot>
        );
    }
}
export default exp; 