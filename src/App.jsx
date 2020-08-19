import React from 'react';

import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import NavBar from './Components/Navbar/Navbar.jsx';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="body">
        <Home />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;

// * myLocation: [12.957651, 77.618056]
// ? Mapbox Style: "mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz"

// ! Use this to make the map size responsive.
// useEffect(() => {
//   const handleResize = () => {
//     setViewport({
//       ...viewport,
//       width: window.innerWidth,
//       height: window.innerHeight,
//     });
//   };
//   window.addEventListener('resize', handleResize);
//   return () => {
//     window.removeEventListener('resize', handleResize);
//   };
// });
