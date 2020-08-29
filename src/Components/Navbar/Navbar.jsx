import React from 'react';

import { ReactComponent as NavbarLogo } from '../../assets/svg_icons/Navbar_logo.svg';

import './Navbar.scss';

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="logo">
        <a href="#Home" data-text="Home">
          <NavbarLogo className="svg_logo" alt="Logo" />
        </a>
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
            <a href="#Skills" data-text="Skills">
              Skills
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
