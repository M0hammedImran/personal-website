import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import My404Component from './Components/My404Component/My404Component';
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
            <Route path="/Projects" component={Projects} />
            <Route path="/Skills" component={Skills} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Resume" component={Resume} />
            <Route path="*" exact component={My404Component} />
            {/* <Redirect from="*" to="/404" /> */}
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
