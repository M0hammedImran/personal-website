import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import My404Component from './Components/My404Component/My404Component';
import { ReactComponent as NavbarLogo } from './assets/svg_icons/Navbar_logo.svg';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand>
            <Link to="/" data-text="Home">
              <NavbarLogo className="svg_logo" alt="Logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end" activeKey="/">
              <NavItem>
                <Nav.Link as={NavLink} to="/" exact={true}>
                  Home
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={NavLink} to="/Projects">
                  Projects
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={NavLink} to="/Skills">
                  Skills
                </Nav.Link>
              </NavItem>
              <NavItem>
                <Nav.Link as={NavLink} to="/Contact">
                  Contact
                </Nav.Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home>
              <div className="resumeLink">
                <div>
                  <Link to="/Resume">My Resume</Link>
                </div>
              </div>
              <div className="projectLink">
                <div>
                  <Link to="/Projects">My Projects</Link>
                </div>
              </div>
            </Home>
          </Route>
          <Route path="/Projects" component={Projects} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Contact" component={Contact} />
          <Route path="/Resume" component={Resume} />
          <Route path="*" exact component={My404Component} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
