import React from 'react';

import NavBar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
import MobileButtons from './Components/MobileButtons/MobileButtons';

import './App.scss';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <Home />
        <Projects />
        <Skills />
        <Contact />
        <Resume />
      </div>
      <MobileButtons />
    </div>
  );
};

export default App;

// * myLocation: [12.957651, 77.618056]
// ? Mapbox Style: "mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz"
