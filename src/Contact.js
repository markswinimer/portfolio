import React, { Component } from 'react';


class Contact extends Component {
  render() {
    const { header, content } = this.props
    return(
      <div className="Contact">
        <h1>{header}</h1>
        <p>{content}</p>
        <div className="Contact-links">
          <div className="Contact-button">Reach out</div>
        </div>
      </div>
    )
  }
}
export default Contact;
