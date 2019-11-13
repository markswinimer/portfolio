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
            <div className="SimpleContentSection-button">Reach out</div>
        </div>
        </div>
      </div>
    )
  }
}
export default SimpleContentSection;
