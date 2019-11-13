import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return(
      <div className="Navbar">
      <div className="Navbar-container">
        <div className="Navbar-avatar-container">
          M
          {/* <img src="https://www.washingtonpost.com/resizer/g8YZs6VSwW8io7_i13wBggeYqnA=/767x0/smart/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/BQRPP7J4D5FLDBA5EN4Q7YBIJA.jpeg"/> */}
        </div>
        <div className="Navbar-link-container">
          <a href="/">Home</a>
          <a href="https://www.linkedin.com/in/markswinimer/">Linkedin</a>
          <a href="https://github.com/markswinimer">Github</a>
          {/* <a className="Navbar-link">blog</a> */}
        </div>
        </div>
      </div>
    )
  }
}
export default Navbar;
