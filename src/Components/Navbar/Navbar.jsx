import React from 'react';

import { ReactComponent as NavbarLogo } from '../../assets/svg_icons/Navbar_logo.svg';

import './Navbar.scss';

function Navbar({ setHeight }) {
  const clickHandler = (e) => {
    setHeight({ ...setHeight, component: e.target.dataset.remove });
    console.log(e.target.dataset.remove);
  };
  return (
    <div className="navbar_container">
      <div className="logo">
        <a href="#Home" data-text="Home">
          <NavbarLogo className="svg_logo" alt="Logo" />
        </a>
      </div>
      <div className="nav_links">
        <ul>
          <li onClick={clickHandler}>
            <a href="#Home" data-remove="Home">
              Home
            </a>
          </li>
          <li onClick={clickHandler}>
            <a href="#Projects" data-remove="Projects">
              Projects
            </a>
          </li>
          <li onClick={clickHandler}>
            <a href="#Skills" data-remove="Skills">
              Skills
            </a>
          </li>
          <li onClick={clickHandler}>
            <a href="#Contact" data-remove="Contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
