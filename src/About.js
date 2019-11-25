import React, { Component } from 'react';
import profile from './images/profile-dog.jpg';


class About extends Component {
  render() {
    const { header, subheader, content } = this.props;
    return(
      <div className={`About Container ${this.props.color}`}>
        <div className="About-left-section">
          <div className="About-profile-image">
            <img alt="profile" src={profile} />
          </div>
        </div>
        <div className="About-right-section">
          <h1>{header}</h1>
          <h2>{subheader}</h2>
          <p>{content}</p>
        </div>
      </div>
    )
  }
}
export default About;
