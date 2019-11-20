import React, { Component } from 'react';
import profile from './images/profile-dog.jpg';


class About extends Component {
  render() {
    const { header, subheader, content } = this.props;
    return(
      <div className={`Content-container ${this.props.color}`}>
        <div className="Content">
          <div className="Content-left-about">
            <div className="Content-image-about">
              <img src={profile} />
            </div>
          </div>
          <div className="Content-right">
            <h1>{header}</h1>
            <h2>{subheader}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default About;
