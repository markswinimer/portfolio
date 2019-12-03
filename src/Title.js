import React, { Component } from 'react';

class Title extends Component {
  render() {
    return(
      <div className="Title">
        <div className="Title-name">
          <h1>Mark Swinimer</h1>
          <h2>web developer</h2>
        </div>
        <div className="Title-about">
          {this.props.introduction}
        </div>
      </div>
    )
  }
}

export default Title;
