import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  render() {
    return(
        <div className="Projects Container">
          <div className="Projects-blurb">
            <h1>Projects</h1>
            <h2>What I'm working on</h2>
            <p>I'm currently working on React applications like the <strong>color picker</strong>, which is created alongside a tutorial. I am also looking forward to these planned personal projects: <strong>movie guessing game</strong>, <strong>personal blog</strong> and a <strong>text adventure in React</strong></p>
          </div>
          <div className="Projects-grid">
            <ProjectCard
              title="UIE Landing Page"
              description="Static landing page design for my internship at UIE. I lead and implemented the code and design."
              tags={["Ruby", "Rails", "React"]}
              github="github.com/markswinimer"
              liveSite="nerd-words.herokuapp.com"
            />
            <ProjectCard
              title="Nerd Words"
              description="A word library application with a dedicated database designed as user created decks for Pictionary and other word games."
              tags={["Ruby", "Rails", "React"]}
              github="nerd-words.herokuapp.com"
              liveSite="uie.com"
            />
            {/* <ProjectCard
              title="Nerd Words"
              description="A word library application designed as user created decks for Pictionary and other word games."
              tags={["Ruby", "Rails", "React"]}
              github="github.com/markswinimer"
              liveSite="github.com/markswinimer"
            /> */}
          </div>
        </div>
    )
  }
}
export default Projects;
