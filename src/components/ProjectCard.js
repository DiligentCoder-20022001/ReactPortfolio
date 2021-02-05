import React from 'react';
import { slideInUp } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import photo from './sid.jpg';
import './projects.css';
const styles = {
    slideInUp: {
        animation: 'x 2s',
        animationName: Radium.keyframes(slideInUp, 'slideInUp')
    }   
}
class project extends React.Component {
    constructor(props)
        {
            super(props);
            this.src = this.props.src;
            this.name = this.props.name
            this.link = this.props.link;
        }
    render() {
        
        return (
            <StyleRoot>
            <div style ={styles.slideInUp}>
            <div classNameName="center" style ={{fontFamily:'PT Sans Narrow, sans-serif', paddingTop: '2%', paddingBottom: '2%'}}  >
                    <div className="card-container1">
                        <span className="pro">{this.tag}</span>
                        <img className="round" src={this.src} alt="user" />
                        <h1 style={{fontWeight: "bolder",fontSize: '3rem',lineHeight: '1.5'}}>{this.name}</h1>
                        <p style = {{fontWeight: "bolder", fontSize: '1rem'}} onClick = {() => {window.open(this.link, "_blank")}}>{this.props.desc}</p>
                        <br></br>
                    </div>



            </div>
            </div>
            </StyleRoot>
        );
    }
}
export default project; 