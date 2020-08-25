import React from 'react';

import NavBar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

import { ReactComponent as HomeSvg } from './assets/svg_icons/home_icon.svg';
import { ReactComponent as ProjectsSvg } from './assets/svg_icons/projects_icon.svg';
import { ReactComponent as SkillsSvg } from './assets/svg_icons/globe_icon.svg';
import { ReactComponent as ContactSvg } from './assets/svg_icons/contacts_icon.svg';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <Home />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <div className="circle_container">
        <a href="#Home">
          <div className="actionButton Home">
            <HomeSvg className="actionButton__svg" />
          </div>
        </a>
        <a href="#Projects">
          <div className="actionButton Projects">
            <ProjectsSvg className="actionButton__svg" />
          </div>
        </a>
        <a href="#Skills">
          <div className="actionButton Skills">
            <SkillsSvg className="actionButton__svg" />
          </div>
        </a>
        <a href="#Contact">
          <div className="actionButton Contact">
            <ContactSvg className="actionButton__svg" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default App;

// * myLocation: [12.957651, 77.618056]
// ? Mapbox Style: "mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz"
