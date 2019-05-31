import React, { Component } from "react"
import About from "./components/About"
import Portfolio from "./components/About"
import Contact from "./components/About"
import "./App.css"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Route path='./about' compnent={About} />
            <Route path='./portfolio' compnent={Portfolio} />
            <Route path='./contact' compnent={Contact} />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
