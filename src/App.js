
import './App.css';
import './components/cards.css';
import About from './components/About';
import React from 'react';
import { fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Exp from './components/ExpCards';
import {Navbar} from 'react-bootstrap'; 
import {Nav} from 'react-bootstrap'; 
import logo1 from './images/askai.jpg';
import logo2 from './images/startup.jpg';
import Skills from './components/SkillCard';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Projects from './components/Project';
const styles = {
  fadeInRight: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "about"
    }
    this.changeAbout = this.changeAbout.bind(this);
    this.changeExp = this.changeExp.bind(this);
    this.changeAcad = this.changeAcad.bind(this);
    this.changeSkills = this.changeSkills.bind(this);
    this.changeProjects = this.changeProjects.bind(this);
    this.changeAchieve = this.changeAchieve.bind(this);
    this.changeBlogs = this.changeBlogs.bind(this);
    this.changeContact = this.changeContact.bind(this);
    this.company1 = "AskAI softech";
    this.period1 = "Dec 2020 - Present";
    this.pos1 = "Web development intern";
    this.tag1 = "Internship";
    this.company2 = "The Startup";
    this.period2 = "Nov 2020 - Dec 2020";
    this.pos2 = "Technical content writer";
    this.period2 = "Nov 2020 - Dec 2020";
    this.tag2 = "Freelance";
    this.lang1 = "C++";
    this.lang2 = "Java";
    this.lang3 = "Javascript";
    this.lang4 = "PHP";
    this.front1 = "HTML5";
    this.front2 = "CSS";
    this.front3 = "Bootstrap";
    this.front4 = "React.JS";
    this.back1 = "MySQL";
    this.back2 = "Node.JS";
    this.back3 = "PHP";
    this.back4 = "MongoDB"
  }
  changeAbout() {
    this.setState({ status: "about" });
  }
  changeExp() {
    this.setState({ status: "experience" });
  }
  changeAcad() {
    this.setState({ status: "academics" });
  }
  changeSkills() {
    this.setState({ status: "skills" });
  }
  changeAchieve() {
    this.setState({ status: "achievements" });
  }
  changeProjects() {
    this.setState({ status: "projects" });
  }
  changeBlogs() {
    this.setState({ status: "blogs" });
  }
  changeContact() {
    this.setState({ status: "contact" });
  }
  checkStatus() {
    if (this.state.status === "about") {
      return <div className="App">
      <StyleRoot>
      <div style={styles.fadeInRight}>
      <div style={{paddingBottom: '2%'}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home" style={{fontWeight: "bolder", fontFamily: "sans-serif", paddingLeft:"2%", paddingRight: "2%"}}>DiligentCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={this.changeAbout} style={{paddingLeft: "5%", paddingRight: "5%"}}>About</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeExp} style={{paddingLeft: "5%", paddingRight: "5%"}}>Experience</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeSkills} style={{paddingLeft: "5%", paddingRight: "5%"}}>Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>

        </StyleRoot>
        <About />
      </div>
    }
    if (this.state.status === "experience") {
      return <div className="App">
      <StyleRoot>
      <div style={styles.fadeInRight}>
      <div style={{paddingBottom: '2%'}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home" style={{fontWeight: "bolder", fontFamily: "sans-serif", paddingLeft:"2%", paddingRight: "2%"}}>DiligentCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={this.changeAbout} style={{paddingLeft: "5%", paddingRight: "5%"}}>About</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeExp} style={{paddingLeft: "5%", paddingRight: "5%"}}>Experience</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeSkills} style={{paddingLeft: "5%", paddingRight: "5%"}}>Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>

        </StyleRoot>
        <Exp company={this.company1} position={this.pos1} tag={this.tag1} period={this.period1} src = {logo1}/>
        <Exp company={this.company2} position={this.pos2} tag={this.tag2} period={this.period2}  src = {logo2}/>
      </div>
    }
    if(this.state.status === "skills")
    {
      return <div className = "App">
      <StyleRoot>
      <div style={styles.fadeInRight}>
      <div style={{paddingBottom: '2%'}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home" style={{fontWeight: "bolder", fontFamily: "sans-serif", paddingLeft:"2%", paddingRight: "2%"}}>DiligentCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={this.changeAbout} style={{paddingLeft: "5%", paddingRight: "5%"}}>About</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeExp} style={{paddingLeft: "5%", paddingRight: "5%"}}>Experience</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeSkills} style={{paddingLeft: "5%", paddingRight: "5%"}}>Skills</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>

        </StyleRoot>
        <Row style = {{paddingTop: "2%", paddingBottom: "2%", textAlign: "center"}}>
        <h2 >Langauges</h2>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.lang1}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.lang2}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.lang3}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.lang4}/></Col>
        </Row>
        <hr/>
        <Row style = {{paddingTop: "2%", paddingBottom: "2%", textAlign: "center"}}>
        <h2>Frontend</h2>
        <Col style =  {{paddingLeft: "7%"}}><Skills con = {this.front1}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.front2}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.front3}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.front4}/></Col>
        </Row><hr/>
        <Row style = {{paddingTop: "2%", paddingBottom: "2%", textAlign: "center"}}>
        <h2>Backend</h2>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.back1}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.back2}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.back3}/></Col>
        <Col style = {{paddingLeft: "7%"}}><Skills con = {this.back4}/></Col>
        </Row>
        </div>
    }
  }
  render() {
    return (
      this.checkStatus()
    );
  }
}
export default App; 