import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <div className="Navbar">
        <div className="Navbar-logo">M</div>
        <div className="Navbar-links">
          <a href="/">contact me</a>
          <a href="https://www.linkedin.com/in/markswinimer/">linkedin</a>
          <a href="https://github.com/markswinimer">github</a>
          {/* <a className="Navbar-link">blog</a> */}
        </div>
      </div>
    )
  }
}
export default Navbar;
