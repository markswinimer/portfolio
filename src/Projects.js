import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  render() {
    return(
        <div className="Projects Container">
          <div className="Projects-blurb">
            <h1>Projects</h1>
            <h2>What I'm working on</h2>
            <p>In this section, I will display a few of the projects I have been working on. Talk about the technology that interests you and what excites you. Relate to a specific project or two and talk about a framework or concept you enjoyed. Encourage looking at that project.</p>
          </div>
          <div className="Projects-grid">
            <ProjectCard
              title="UIE Landing Page"
              description="A word library application designed as user created decks for Pictionary and other word games."
              tags={["Ruby", "Rails", "React"]}
              github="github.com/markswinimer"
              liveSite="github.com/markswinimer"
            />
            <ProjectCard
              title="Nerd Words"
              description="A word library application designed as user created decks for Pictionary and other word games."
              tags={["Ruby", "Rails", "React"]}
              github="github.com/markswinimer"
              liveSite="github.com/markswinimer"
            />
            <ProjectCard
              title="Nerd Words"
              description="A word library application designed as user created decks for Pictionary and other word games."
              tags={["Ruby", "Rails", "React"]}
              github="github.com/markswinimer"
              liveSite="github.com/markswinimer"
            />
          </div>
        </div>
    )
  }
}
export default Projects;
