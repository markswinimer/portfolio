import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Navbar from './Navbar.js';
import './Main.scss';

class App extends Component {
  render() {
    return(
      <HashRouter basename='/'>
        <div className="App-container">
          <Navbar/>
          <Route exact path="/" component={ Home } />

          {/* Features I plan to build out. */}
          {/* <Route exact path="/projects" component={Projects} /> */}
          {/* <Route exact path="/blog" component={Blog} /> */}
        </div>
      </HashRouter>
  )
}
}

export default App;
