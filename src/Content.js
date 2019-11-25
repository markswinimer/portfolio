import React, { Component } from 'react';

class Content extends Component {
  render() {
    const { header, subheader, content } = this.props;
    return(
      <div className={`Content Container ${this.props.color}`}>
        <div className="Content-left">
          <div className="Content-tech">
            <p>React</p>
            <p>ES6 Javascript</p>
            <p>HTML & CSS</p>
            <p>Ruby on Rails</p>
            <p>WordPress</p>
          </div>
        </div>
        <div className="Content-right">
          <h1>{header}</h1>
          <h2>{subheader}</h2>
          <p>{content}</p>
        </div>
      </div>
    )
  }
}
export default Content;
