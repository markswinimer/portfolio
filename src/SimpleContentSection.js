import React, { Component } from 'react';


class SimpleContentSection extends Component {
  render() {
    const { header, content } = this.props
    return(
      <div className="SimpleContentSection-container">
        <div className="SimpleContentSection">
          <h1>{header}</h1>
          <p>{content}</p>
          <div className="SimpleContentSection-links">
{/* 
            <p><i className="fas fa-envelope-square" /> markswinimer@gmail.com</p>
            <p><i className="fab fa-github" /> github.com/markswinimer</p>
            <p><i className="fab fa-linkedin" /> linkedin.com/in/markswinimer</p> */}

        </div>
        </div>
      </div>
    )
  }
}
export default SimpleContentSection;
