import React, { Component } from 'react';

class ContentSection extends Component {
  render() {
    const { header, subheader, content } = this.props;
    return(
      <div className={`ContentSection-container ${this.props.color}`}>
        <div className="ContentSection">
          <div className="ContentSection-left">
            <h2>Recent</h2>
            <ul>
              <li>React</li>
              <li>ES6 Javascript</li>
              <li>Ruby on Rails</li>
              <li>WordPress</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          <div className="ContentSection-right">
            <h1>{header}</h1>
            <h2>{subheader}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default ContentSection;
