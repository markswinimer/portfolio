import React, { Component } from 'react';

class SimpleContentSection extends Component {
  render() {
    const { header, content } = this.props
    return(
      <div className="SimpleContentSection-container">
        <div className="SimpleContentSection">
          <h1>{header}</h1>
          <p>{content}</p>
          <p>Mark Swinimer</p>
          <p>markswinimer@gmail.com</p>
          <p>github.com/markswinimer</p>
          <p>linkedin.com/in/markswinimer</p>
        </div>
      </div>
    )
  }
}
export default SimpleContentSection;
