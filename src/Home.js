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
            introduction="I'm a Web Developer located in Boston MA. My passion is writing clean code  and developing creative applications with functional solutions for the web."
          />

          <Divider startPositionColor="white"/>

          <About
            color="navy"
            header="About me"
            subheader=""
            content={["Nice to meet you! I'm Mark and I create web applications and implement web based solutions. Also, I love Dogs.", "I have an interest in full stack development; especially using the technologies: Ruby, Javascript, React and other front end libraries which make creating web applications smoother and progressive."]}
          />
          <Divider startPositionColor="navy"/>

          <Projects />

          <Divider startPositionColor="white"/>

          <Content
            color="navy"
            header="What I'm learning"
            subheader="New technologies"
            content="I have been familiarizing myself with React and exploring news ways to utilize this libray. New javascript technologies like Gatsby and Node applications have been fascinating to jump into."z
          />
          {/* I'm constantly in the process of learning more Ruby and the rails framework. Mobile development is in the back of my mind and I would like to use React Native or develop for android with Java." */}

          <Divider startPositionColor="navy"/>

          <Contact
            header="Contact me!"
            content="I'd love to share some of my work with you. Feel free to reach out via email or explore my work on github. I have also provided links to the live versions in the projects sections above. Local to Boston? I'm interested in meeting up with like-minded developers over coffee at a local cafe."
          />
          <Footer />
      </div>
    )
  }
}

export default Home;
