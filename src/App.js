
import './App.css';
import Blogs from './components/BlogCards';
import './components/cards.css';
import About from './components/About';
import React from 'react';
import { fadeInRight } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import Exp from './components/ExpCards';
import {Navbar} from 'react-bootstrap'; 
import {Nav} from 'react-bootstrap'; 
import logo1 from './images/askai.jpg';
import gfg from './images/gfg.png';
import Exp1 from './components/Exp1';
import hacker from './images/hacker.png';
import logo2 from './images/startup.jpg';
import project1 from './images/images.png';
import project2 from './images/images.jpg'
import GitHubCalendar from 'react-github-calendar';
import project3 from './images/note.png';
import Skills from './components/SkillCard';
import proj4 from './images/geek.png';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import Project from './components/ProjectCard';
import proj5 from './images/air.png';
import proj8  from './images/sudoku.png';
import proj7 from './images/map.png';
import proj9 from './images/ttt.jpg';
import Contact from './components/Contact';
import proj6 from './images/weather.png';
import clg from './images/vit.jpg';
import twelve from './images/devi.jpg';
import Exp2 from './components/Exp2';
import ds from './images/ds.png';
import dp from './images/dp.png';
import two from './images/two.jpg';
import bit from './images/bit.png';
import code from './images/code.jpg';
import med from './images/medium.png';
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
              <Nav.Link href="#link" onClick={this.changeProjects} style={{paddingLeft: "5%", paddingRight: "5%"}}>Projects</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeBlogs} style={{paddingLeft: "5%", paddingRight: "5%"}}>Blogs</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAchieve} style={{paddingLeft: "5%", paddingRight: "5%"}}>Achievements</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAcad} style={{paddingLeft: "5%", paddingRight: "5%"}}>Academics</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeContact} style={{paddingLeft: "5%", paddingRight: "5%"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>
        <About />
      </div>
    }
    if (this.state.status === "experience") {
      return <div className="App">
  

      <div style={{paddingBottom: '2%'}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home" style={{fontWeight: "bolder", fontFamily: "sans-serif", paddingLeft:"2%", paddingRight: "2%"}}>DiligentCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={this.changeAbout} style={{paddingLeft: "5%", paddingRight: "5%"}}>About</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeExp} style={{paddingLeft: "5%", paddingRight: "5%"}}>Experience</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeSkills} style={{paddingLeft: "5%", paddingRight: "5%"}}>Skills</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeProjects} style={{paddingLeft: "5%", paddingRight: "5%"}}>Projects</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeBlogs} style={{paddingLeft: "5%", paddingRight: "5%"}}>Blogs</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAchieve} style={{paddingLeft: "5%", paddingRight: "5%"}}>Achievements</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAcad} style={{paddingLeft: "5%", paddingRight: "5%"}}>Academics</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeContact} style={{paddingLeft: "5%", paddingRight: "5%"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <StyleRoot>
        <div style={{textAlign: "center"}}><div style={styles.fadeInRight}><h1 style = {{fontSize: "5rem", fontWeight: "bolder"}}>Work Experience</h1></div>
        </div>
        </StyleRoot>
        <Row><Col><Exp company={"AskAI softech"} position={this.pos1} tag={this.tag1} period={this.period1} src = {logo1}/></Col>
        <Col><Exp company={this.company2} position={this.pos2} tag={this.tag2} period={this.period2}  src = {logo2}/></Col>
        <Col><Exp company={"Medium"} position={"Content Writer"} tag={"Part-time"} period={"Nov 2020 - Current"}  src = {med}/></Col>
        </Row>
        
      </div>
    }
    if(this.state.status === "skills")
    {
      return <div className = "App">
      <div style={{paddingBottom: '2%'}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home" style={{fontWeight: "bolder", fontFamily: "sans-serif", paddingLeft:"2%", paddingRight: "2%"}}>DiligentCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={this.changeAbout} style={{paddingLeft: "5%", paddingRight: "5%"}}>About</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeExp} style={{paddingLeft: "5%", paddingRight: "5%"}}>Experience</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeSkills} style={{paddingLeft: "5%", paddingRight: "5%"}}>Skills</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeProjects} style={{paddingLeft: "5%", paddingRight: "5%"}}>Projects</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeBlogs} style={{paddingLeft: "5%", paddingRight: "5%"}}>Blogs</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAchieve} style={{paddingLeft: "5%", paddingRight: "5%"}}>Achievements</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAcad} style={{paddingLeft: "5%", paddingRight: "5%"}}>Academics</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeContact} style={{paddingLeft: "5%", paddingRight: "5%"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <StyleRoot>
        <div style={{textAlign: "center"}}><div style={styles.fadeInRight}><h1 style = {{fontSize: "5rem", fontWeight: "bolder"}}>Skills</h1></div>
        </div>
        </StyleRoot>
        <Row style = {{paddingTop: "2%", paddingBottom: "2%", textAlign: "center"}}>
        <h2 >Langauges</h2>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.lang1} src = {this.cpp}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.lang2} src = {this.java}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.lang3} src = {this.javascript}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.lang4} src = {this.php} /></Col>
        </Row>
        <hr/>
        <Row style = {{paddingTop: "2%", paddingBottom: "2%", textAlign: "center"}}>
        <h2>Frontend</h2>
        <Col style =  {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.front1}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.front2}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.front3}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.front4}/></Col>
        </Row><hr/>
        <Row style = {{paddingTop: "2%", paddingBottom: "2%", textAlign: "center"}}>
        <h2>Backend</h2>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.back1}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.back2}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.back3}/></Col>
        <Col style = {{paddingLeft: "2%", paddingRight: "2%", paddingTop: "2%"}}><Skills con = {this.back4}/></Col>
        </Row>
        </div>
    }
    if(this.state.status === "projects")
    {
      return <div className = "App">
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
              <Nav.Link href="#link" onClick={this.changeProjects} style={{paddingLeft: "5%", paddingRight: "5%"}}>Projects</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeBlogs} style={{paddingLeft: "5%", paddingRight: "5%"}}>Blogs</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAchieve} style={{paddingLeft: "5%", paddingRight: "5%"}}>Achievements</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAcad} style={{paddingLeft: "5%", paddingRight: "5%"}}>Academics</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeContact} style={{paddingLeft: "5%", paddingRight: "5%"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>
        <StyleRoot>

        <div style ={styles.fadeInRight}><div style={{textAlign:"center", paddingTop: "2%", paddingBottom: "2%"}}><h1 style={{fontSize: "5rem", fontWeight:"bolder"}}>Projects</h1></div>
        </div></StyleRoot>
        
        
        <Row>
        <Col><Project src = {project1} name = {"AlgoVisualizer"} desc = {"A sorting algorithm visualizer to visualize various sorting algorithms like merger sort, bubble sort, etc. Built using React.JS (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/AlgoVisualizer"}/></Col>
        <Col><Project src= {project2} name = {"Tracker"} desc = {"A ToDo list application with backend integrated to store your tasks in various directories. Built using MEN stack for backend and HTML, CSS for frontend (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/Tracker-ToDo-List"}/></Col>
        <Col><Project src = {project3} name = {"Keeper"} desc = {"A clone of the google keep app (only front end) implemented using React.JS to store notes on various titles. (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/Keeper/tree/master"}/></Col>
        
        </Row>
        <Row>
        <Col><Project src = {proj4} name = {"GeekBuzz"} desc = {"A competitve app which promotes the quiz culture among students by letting them compete for ranks. Provides admin support for the teachers to monitor. Built using PHP, MySQL for backend and Bootstrap for frontend. (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/GeekBuzz"}/></Col>
        <Col><Project src = {proj5} name = {"AirlineAnalyzer"} desc = {"A data analytics project built using R which aims to predict the reason behind the delay of airlines and flights. (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/Airline-Delay-analysis"}/></Col>
        <Col><Project src= {proj6} name = {"WeatherPrecised"} desc = {"An android app which lets users know the weather of a place on entering the place as input. Built using Java and OpenWeather API. Website also exists for the same project built using Node.JS. (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/WeatherPrecised-Android"}/></Col>
        </Row>
        <Row>
        <Col><Project src = {proj7} name = {"EnRoute"} desc = {"An android app built using Java to help people know their location and go back to their desired location. Built using Google maps API, Java and XML. (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/EnRoute"}/></Col>
        <Col><Project src = {proj8} name = {"SudokuSolve"} desc = {"Project implementing backtracking algorithm to solve an incomplete sudoku and return the completed sudoku grid. (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/Easy-Sudoku"}/></Col>
        <Col><Project src= {proj9 } name = {"Connect3"} desc = {"Basic android project implementing the 2 player game of Tic-Tac-Toe (CLICK HERE)"} link = {"https://github.com/DiligentCoder-20022001/Connect3-App "}/></Col>
        </Row>
        </div>
    }
    if(this.state.status === "blogs")
    {
      return <div className = "App">
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
              <Nav.Link href="#link" onClick={this.changeProjects} style={{paddingLeft: "5%", paddingRight: "5%"}}>Projects</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeBlogs} style={{paddingLeft: "5%", paddingRight: "5%"}}>Blogs</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAchieve} style={{paddingLeft: "5%", paddingRight: "5%"}}>Achievements</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAcad} style={{paddingLeft: "5%", paddingRight: "5%"}}>Academics</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeContact} style={{paddingLeft: "5%", paddingRight: "5%"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>
        <StyleRoot><div style ={styles.fadeInRight}><div style={{textAlign:"center", paddingTop: "2%", paddingBottom: "2%"}}><h1 style={{fontSize: "5rem", fontWeight:"bolder"}}>Blogs</h1></div>
        </div></StyleRoot>
        <Row><Col><Blogs src = {dp} title = {"Dynamic programming"} desc = {"Dynamic programming(DP) is an algorithmic technique that is used for the optimization of problems that have a recursive solution. Usually whenever...(click to read more)"} dest = {"https://siddharthschandran44.medium.com/best-time-to-buy-and-sell-stocks-dp-acf093c634cb"}/></Col><Col><Blogs src = {two} title = {"Two pointers"} desc = {"Two pointers is an algorithmic technique used for the optimization of many other algorithmic problems. It can be also told as a subset of the binary...(click to read more)"} dest = {"https://medium.com/swlh/two-pointers-eugene-and-an-array-89b57f6740c6?source=your_stories_page-------------------------------------"}/></Col></Row>
        <Row><Col><Blogs src = {ds} title = {"Linked list"} desc = {"Computer science is full of real-life examples. One such example is the linked list. A linked list is a data structure that has nodes attached. Now one...(click to read more)"} dest = {"https://siddharthschandran44.medium.com/linked-list-reordering-9613dd4d7a1f?source=your_stories_page-------------------------------------"} /></Col><Col><Blogs src = {bit} title = {"Bitmasking"} desc = {"Hey guys, it’s me DiligentCoder with yet another article on algorithms this time specifically on bit masking, where I’ll cover some basic concepts and...(click to read more)"} dest = {"https://siddharthschandran44.medium.com/unmasking-concepts-of-bitmasks-fc11fe99a801"}/></Col></Row>
        <StyleRoot><div style={styles.fadeInRight}><div style ={{textAlign: "center",paddingTop: "2%"}}><h1>For more stories click the below button & Please follow :)</h1>
        <button style={{width:"200px", height: "50px", background:"black", borderRadius: "10%", color:"#fff"}}>Click here</button></div>
        </div></StyleRoot></div>
    }
    if(this.state.status === "achievements")
    {
      return <div className = "App"><div style={styles.fadeInRight}>
      <div style={{paddingBottom: '2%'}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home" style={{fontWeight: "bolder", fontFamily: "sans-serif", paddingLeft:"2%", paddingRight: "2%"}}>DiligentCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={this.changeAbout} style={{paddingLeft: "5%", paddingRight: "5%"}}>About</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeExp} style={{paddingLeft: "5%", paddingRight: "5%"}}>Experience</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeSkills} style={{paddingLeft: "5%", paddingRight: "5%"}}>Skills</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeProjects} style={{paddingLeft: "5%", paddingRight: "5%"}}>Projects</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeBlogs} style={{paddingLeft: "5%", paddingRight: "5%"}}>Blogs</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAchieve} style={{paddingLeft: "5%", paddingRight: "5%"}}>Achievements</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAcad} style={{paddingLeft: "5%", paddingRight: "5%"}}>Academics</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeContact} style={{paddingLeft: "5%", paddingRight: "5%"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>
        <StyleRoot>
        <div style={{textAlign: "center"}}><div style={styles.fadeInRight}><h1 style = {{fontSize: "5rem", fontWeight: "bolder"}}>Achievements & Profiles</h1></div>
        </div>
        </StyleRoot>
        <Row><Col><Exp2 company={"CodeChef"} position={"Highest rating : 3 stars (click)"} tag={"Competitive coding"}  src = {code} link = {"https://www.codechef.com/users/sid_20022001"}/></Col>
        <Col><Exp2 company={"HackerRank"} position={"5 stars in problem solving (click)"} tag={"Problem solving"}   src = {hacker} link ={"https://www.hackerrank.com/Siddharth_20_02"}/></Col>
        <Col><Exp2 company={"GeeksForGeeks"} position={"AIR 5000 in DSA (click)"} tag={"DSA"}  src = {gfg} link = {"https://auth.geeksforgeeks.org/user/siddharth_s_chandran/practice/"}/></Col>
        </Row>
        </div>
    }
    if(this.state.status === "academics")
    {
      return <div className = "App"><div style={styles.fadeInRight}>
      <div style={{paddingBottom: '2%'}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home" style={{fontWeight: "bolder", fontFamily: "sans-serif", paddingLeft:"2%", paddingRight: "2%"}}>DiligentCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={this.changeAbout} style={{paddingLeft: "5%", paddingRight: "5%"}}>About</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeExp} style={{paddingLeft: "5%", paddingRight: "5%"}}>Experience</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeSkills} style={{paddingLeft: "5%", paddingRight: "5%"}}>Skills</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeProjects} style={{paddingLeft: "5%", paddingRight: "5%"}}>Projects</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeBlogs} style={{paddingLeft: "5%", paddingRight: "5%"}}>Blogs</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAchieve} style={{paddingLeft: "5%", paddingRight: "5%"}}>Achievements</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAcad} style={{paddingLeft: "5%", paddingRight: "5%"}}>Academics</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeContact} style={{paddingLeft: "5%", paddingRight: "5%"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>
        <StyleRoot>
        <div style={{textAlign: "center"}}><div style={styles.fadeInRight}><h1 style = {{fontSize: "5rem", fontWeight: "bolder"}}>Academics</h1></div>
        </div>
        </StyleRoot>
        <Row><Col><Exp1 company={"VIT Chennai"} position={"CGPA : 8.48"} tag={"B.Tech"}  src = {clg}/></Col>
        <Col><Exp1 company={"Devi Academy"} position={"12th CBSE boards: 89.2%"} tag={"12th"}   src = {twelve}/></Col>
        </Row>
        </div>
    }
    if(this.state.status === "contact")
    {
      return <div className = "App"><div style={styles.fadeInRight}>
      <div style={{paddingBottom: '2%'}}>
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home" style={{fontWeight: "bolder", fontFamily: "sans-serif", paddingLeft:"2%", paddingRight: "2%"}}>DiligentCoder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home" onClick={this.changeAbout} style={{paddingLeft: "5%", paddingRight: "5%"}}>About</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeExp} style={{paddingLeft: "5%", paddingRight: "5%"}}>Experience</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeSkills} style={{paddingLeft: "5%", paddingRight: "5%"}}>Skills</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeProjects} style={{paddingLeft: "5%", paddingRight: "5%"}}>Projects</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeBlogs} style={{paddingLeft: "5%", paddingRight: "5%"}}>Blogs</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAchieve} style={{paddingLeft: "5%", paddingRight: "5%"}}>Achievements</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeAcad} style={{paddingLeft: "5%", paddingRight: "5%"}}>Academics</Nav.Link>
              <Nav.Link href="#link" onClick={this.changeContact} style={{paddingLeft: "5%", paddingRight: "5%"}}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        </div>
        <StyleRoot>
        <div style={{textAlign: "center"}}><div style={styles.fadeInRight}><h1 style = {{fontSize: "5rem", fontWeight: "bolder"}}>Let's connect!</h1></div>
        </div>
        </StyleRoot>
        <Contact/>
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