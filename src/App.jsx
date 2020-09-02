import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// import NavBar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import { ReactComponent as NavbarLogo } from './assets/svg_icons/Navbar_logo.svg';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="navbar_container">
          <div className="logo">
            <Link to="/" data-text="Home">
              <NavbarLogo className="svg_logo" alt="Logo" />
            </Link>
          </div>
          <div className="nav_links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Projects">Projects</Link>
              </li>
              <li>
                <Link to="/Skills">Skills</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="body">
          <Switch>
            <Route exact path="/">
              <Home>
                <div className="resumeLink">
                  <div>
                    <Link to="/Resume">My Resume</Link>
                  </div>
                </div>
              </Home>
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Skills">
              <Skills />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Resume">
              <Resume />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
