import React, { Component } from 'react';
import Title from './Title';
import ContentSection from './ContentSection';
import ContentDivider from './ContentDivider';
import SimpleContentSection from './SimpleContentSection';

class Home extends Component {
  render() {
    return(
      <div className="Home">
        <div className="Home-container">
          <Title/>
          <ContentDivider startPositionColor="white"/>
          <ContentSection
            color="navy"
            header="About me"
            subheader="Process and Technologies"
            content="Filler content is being input here so that I can type and not worry about making sense and still fill out a section of content for test readers to read and by test readers I mean myself because no one will be reading this at all!"
          />
          <ContentDivider startPositionColor="navy"/>
          <ContentSection
            color="white"
            header="Projects"
            subheader="What I'm working on"
            content="Filler content is being input here so that I can type and not worry about making sense and still fill out a section of content for test readers to read and by test readers I mean myself because no one will be reading this at all!"
          />
          <ContentDivider startPositionColor="white"/>
          <ContentSection
            color="navy"
            header="Projects"
            subheader="What I'm working on"
            content="Filler content is being input here so that I can type and not worry about making sense and still fill out a section of content for test readers to read and by test readers I mean myself because no one will be reading this at all!"
          />
          <ContentDivider startPositionColor="navy"/>
          <SimpleContentSection
            header="Contact me!"
            content="I'd love to share some of my work with you. Feel free to reach out via email or see my work at one of these links. I'd love to share some of my work with you. Feel free to reach out via email or see my work at one of these links."
          />
        </div>
      </div>
    )
  }
}

export default Home;
