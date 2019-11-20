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
          <Title/>

          <Divider startPositionColor="white"/>

          <About
            color="navy"
            header="About me"
            subheader="Process and Technologies"
            content="Briefly talk about yourself and how you got into coding as a career. Talk about transition from design in college to more web based solutions. Time at launch academy will be included. Maybe a desire to work on web applications specificly and an enjoyment for the front end."
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
