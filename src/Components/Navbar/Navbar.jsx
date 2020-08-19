import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <h2>Mohammed Imran</h2>
      </div>
      <div className="nav-links">
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
