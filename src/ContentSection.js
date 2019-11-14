import React, { Component } from 'react';

class ContentSection extends Component {
  render() {
    const { header, subheader, content } = this.props;
    return(
      <div className={`ContentSection-container ${this.props.color}`}>
        <div className="ContentSection">
          <div className="ContentSection-left">
            <div className="ContentSection-tech">
                <p>React</p>
                <p>ES6 Javascript</p>
                <p>HTML & CSS</p>
                <p>Ruby on Rails</p>
                <p>WordPress</p>
            </div>
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
