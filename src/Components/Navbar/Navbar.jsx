import React from 'react';

import { ReactComponent as NavbarLogo } from '../../assets/svg_icons/Navbar_logo.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar_container">
      <Router>
        <div className="logo">
          <Link to="/" data-text="Home">
            <NavbarLogo className="svg_logo" alt="Logo" />
          </Link>
        </div>
        <div className="nav_links">
          <ul>
            <li>
              <Link to="/" data-remove="Home">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Projects" data-remove="Projects">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Skills" data-remove="Skills">
                Skills
              </Link>
            </li>
            <li>
              <Link to="/Contact" data-remove="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default Navbar;
