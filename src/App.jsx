import React, { useState } from 'react';

import NavBar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Resume from './Components/Resume/Resume';
// import MobileButtons from './Components/MobileButtons/MobileButtons';

import './App.scss';

const App = () => {
  const [height, setHeight] = useState({
    initial: 0,
    final: '100vh',
    minContent: 'min-content',
    component: 'Home',
  });
  return (
    <div className="App">
      <NavBar setHeight={setHeight} />
      <div className="body">
        <Home height={height} setHeight={setHeight} />
        <Projects height={height} />
        <Skills height={height} />
        <Contact height={height} />
        <Resume height={height} />
      </div>
      {/* <MobileButtons /> */}
    </div>
  );
};

export default App;
