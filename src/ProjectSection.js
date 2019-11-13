import React, { Component } from 'react';

class ProjectSection extends Component {
  render() {
    return(
      <div className="ProjectSection-container">
        <div className="ProjectSection">
          <div className="ProjectSection-blurb">
            <h1>Projects</h1>
            <h2>What I'm working on</h2>
            <p>Filler content is being input here so that I can type and not worry about making sense and still fill out a section of content for test readers to read and by test readers I mean myself because no one will be reading this at all!</p>
          </div>
          <div className="ProjectSection-project-container">
            <div className="ProjectSection-project">
              <a href="github.com/markswinimer"><i className="fab fa-github" /></a>
              <a href="github.com/markswinimer"><i className="fas fa-eye"></i></a>
              <h2>Nerd Words</h2>
              <p>a web development project created in 2 weeks</p>
            </div>
            <div className="ProjectSection-project">
              <a href="github.com/markswinimer"><i className="fab fa-github" /></a>
              <a href="github.com/markswinimer"><i className="fas fa-eye"></i></a>
              <h2>UIE Landing Page</h2>
              <p>my redesign and implementation of UIE's landing page</p>
            </div>
            <div className="ProjectSection-project">
              <a href="github.com/markswinimer"><i className="fab fa-github" /></a>
              <a href="github.com/markswinimer"><i className="fas fa-eye"></i></a>
              <h2>Colorpicker</h2>
              <p>React Color project done as a code along</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectSection;
