import React, { Component } from 'react';

class Title extends Component {
  render() {
    return(
      <div className="Title-container">
        <div className="Title">
          <div className="Title-name">
            <h1>Mark Swinimer</h1>
            <h2>Web Developer</h2>
          </div>
          <div className="Title-about">
            I'm a Web Developer located in Boston MA. My passion is writing clean, creative and functional solutions.
          </div>
        </div>
      </div>
    )
  }
}

export default Title;
