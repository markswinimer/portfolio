import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
        <div className="Footer">
          <div className="Footer-icons">
            {/* <i className="fas fa-envelope-square" /> */}
            <a href="github.com/markswinimer"><i className="fab fa-github" /></a>
            <a href="linkedin.com/in/markswinimer"><i className="fab fa-linkedin" /></a>
          </div>
          <div className="Footer-contact">
            <p>2019 Mark Swinimer</p>
            <p>markswinimer@gmail.com</p>
          </div>
        </div>
    )
  }
}
export default Footer;
