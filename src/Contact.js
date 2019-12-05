import React, { Component } from 'react';


class Contact extends Component {
  render() {
    const { header, content } = this.props
    return(
      <div className="Contact Container">
        <h1>{header}</h1>
        <p>{content}</p>
        <div className="Contact-links">
          <div href="mailto:markswinimer@gmail.com" className="Contact-button"><a href="mailto:markswinimer@gmail.com">Reach out</a></div>
        </div>
      </div>
    )
  }
}
export default Contact;
