import React from 'react';

import { ReactComponent as NavbarLogo } from '../../assets/svg_icons/Navbar_logo.svg';

import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="logo">
        <NavbarLogo className="svg_logo" alt="Logo" />
      </div>
      <div className="nav_links">
        <ul>
          <li>
            <a href="#Home" data-text="Home">
              Home
            </a>
          </li>
          <li>
            <a href="#Projects" data-text="Projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#Contact" data-text="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
