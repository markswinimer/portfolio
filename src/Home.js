import React, { Component } from 'react';
import Title from './Title';
import Content from './Content';
import Projects from './Projects';
import About from './About';
import Divider from './Divider';
import Contact from './Contact';
import Footer from './Footer';

class Home extends Component {
  render() {
    return(
      <div className="Home">
          <Title
            introduction="I'm a Web Developer located in Boston MA. My passion is writing clean code, creative applications and functional solutions."
          />

          <Divider startPositionColor="white"/>

          <About
            color="navy"
            header="About me"
            subheader=""
            content={`Nice to meet you! I'm Mark and I create web applications and implement web based solutions. I also love Dogs. I have an interest in full stack development; especially using the technologies: Ruby, Javascript, React and other` + `HELLO` + `front end libraries which make creating web applications smoother and progressive. I'm drawn in by the process of taking an idea or need and working it out to completion, to something interacted with and visible.`}
          />
          <Divider startPositionColor="navy"/>

          <Projects />

          <Divider startPositionColor="white"/>

          <Content
            color="navy"
            header="What I'm learning"
            subheader="New technologies and projects"
            content="Filler content is being input here so that I can type and not worry about making sense and still fill out a section of content for test readers to read and by test readers I mean myself because no one will be reading this at all!"
          />

          <Divider startPositionColor="navy"/>

          <Contact
            header="Contact me!"
            content="I'd love to share some of my work with you. Feel free to reach out via email or see my work at one of these links. I'd love to share some of my work with you. Feel free to reach out via email or see my work at one of these links."
          />
          <Footer />
      </div>
    )
  }
}

export default Home;
