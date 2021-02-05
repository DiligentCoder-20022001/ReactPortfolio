import React from 'react';
import './BlogCards.css';
import { slideInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
const styles = {
    slideInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    }
}
class blog extends React.Component {
    constructor(props)
    {
        super(props);
        this.tag = "Blog";
        this.desc = this.props.desc;
        this.title = this.props.title;
        this.src = this.props.src;
        this.dest = this.props.dest
    }
    render() {
        return (
            <StyleRoot>
            <div style ={styles.slideInUp}>
            <div classNameName="center" style ={{fontFamily:'PT Sans Narrow, sans-serif', paddingTop: '2%', paddingBottom: '2%'}} >
                    <div className="card-container2">
                        <span className="pro">{}</span>
                        <img className="round" src={this.src} alt="user" />
                        <h1 style={{fontWeight: "bolder",fontSize: '3rem',lineHeight: '1.5'}}>{this.title}</h1>
                        <p style={{fontWeight:"bolder"}} onClick ={() => {window.open(this.dest, "_blank")}}>{this.desc}</p>
                        <br></br>
                    </div>



            </div>
            </div>
            </StyleRoot>
        );
    }
}
export default blog; 