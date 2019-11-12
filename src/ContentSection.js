import React, { Component } from 'react';

class ContentSection extends Component {
  render() {
    const { header, subheader, content } = this.props;
    return(
      <div className={`ContentSection-container ${this.props.color}`}>
        <div className="ContentSection">
          <div className="ContentSection-left">
            <div className="ContentSection-image">
              <img src="https://assets.pcmag.com/media/images/521567-how-to-build-a-website.jpg?thumb=y&width=810&height=456" />
            </div>
            <p>react</p>
            <p>javascript</p>
            <p>ruby</p>
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
