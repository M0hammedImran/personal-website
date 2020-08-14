import React, { useState } from 'react';

import Map from './Components/Map';

import './App.css';

const App = () => {
  const [viewport, setViewport] = useState({
    width: '400px',
    height: '400px',
    zoom: 16,
    bearing: 0,
    pitch: 0,
    latitude: 12.957651,
    longitude: 77.618056,
  });

  return (
    <div className="App">
      <div className="map-container">
        <Map viewport={viewport} setViewport={setViewport} />
      </div>
    </div>
  );
};

export default App;

// * myLocation: [12.957651, 77.618056]
// ? Mapbox Style: "mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz"

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
