import React, { Component } from 'react';

class ProjectSection extends Component {
  render() {
    return(
      <div className="ProjectSection-container">
        <div className="ProjectSection">
          <div className="ProjectSection-blurb">
            <h1>Projects</h1>
            <h2>What I'm working on</h2>
            <p>In this section, I will display a few of the projects I have been working on. Talk about the technology that interests you and what excites you. Relate to a specific project or two and talk about a framework or concept you enjoyed. Encourage looking at that project.</p>
          </div>

          <div className="ProjectSection-grid">

            <div className="ProjectSection-grid-card">
              <h2>UIE Landing Page</h2>
              <p>A word library application designed as user created decks for Pictionary and other word games.</p>
              <div className="ProjectSection-links">
                <a href="github.com/markswinimer"><i className="fab fa-github" /></a>
                <a href="github.com/markswinimer"><i className="fas fa-eye"></i></a>
                <div className="ProjectSection-tags">
                  <h4>Ruby</h4>
                  <h4>Rails</h4>
                  <h4>React</h4>
                </div>
              </div>
            </div>
            <div className="ProjectSection-grid-card">
              <h2>Nerd Words</h2>
              <p>A word library application designed as user created decks for Pictionary and other word games.</p>
              <div className="ProjectSection-links">
                <a href="github.com/markswinimer"><i className="fab fa-github" /></a>
                <a href="github.com/markswinimer"><i className="fas fa-eye"></i></a>
                <div className="ProjectSection-tags">
                  <h4>Ruby</h4>
                  <h4>Rails</h4>
                  <h4>React</h4>
                </div>
              </div>
            </div>
          
            <div className="ProjectSection-grid-card">
              <h2>Nerd Words</h2>
              <p>A word library application designed as user created decks for Pictionary and other word games.</p>
              <div className="ProjectSection-links">
                <a href="github.com/markswinimer"><i className="fab fa-github" /></a>
                <a href="github.com/markswinimer"><i className="fas fa-eye"></i></a>
                <div className="ProjectSection-tags">
                  <h4>Ruby</h4>
                  <h4>Rails</h4>
                  <h4>React</h4>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    )
  }
}
export default ProjectSection;
