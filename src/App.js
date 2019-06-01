import React, { Component } from "react"
import About from "./components/About"
import Portfolio from "./components/About"
import Contact from "./components/About"
import "./App.css"
import { Button, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <>
        <Router>
        <div>
          <nav>
            <p> My awesome portfolio</p>
            <Nav>
              <NavItem>
                <Link to='/'><NavLink>About</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/portfolio'><NavLink>Portfolio</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to='/contact'><NavLink>Contact</NavLink></Link>
              </NavItem>
            </Nav>

            {/* <Link to='/'>  <Button color='success'>About</Button></Link> */}

          </nav>
          
            <Route exact path='/' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
