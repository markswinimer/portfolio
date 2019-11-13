import React, { Component } from 'react';
import profile from './images/profile-dog.jpg';


class ContentSectionAbout extends Component {
  render() {
    const { header, subheader, content } = this.props;
    return(
      <div className={`ContentSection-container ${this.props.color}`}>
        <div className="ContentSection">
          <div className="ContentSection-left-about">
            <div className="ContentSection-image-about">
              <img src={profile} />
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
export default ContentSectionAbout;
