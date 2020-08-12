import React from 'react';

import './App.css';

import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const mapboxStyle = 'mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz';
const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoibW9oYW1tZWRpbXJhbiIsImEiOiJja2RyMGlldTIxYThwMnd0djdpbzlpcXk5In0.4eJwVf_Sr2XZrGSejyBqAA',
});

const App = () => {
  return (
    <div className="App">
      <h1>Map</h1>
      <Map
        style={{ mapboxStyle }}
        containerStyle={{
          height: '100vh',
          width: '100vw',
        }}
        interactive={false}
      >
        <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
          <Feature coordinates={[12.957651, 77.618056]} />
        </Layer>
      </Map>
    </div>
  );
};

export default App;

// 12.957651, 77.618056
// ? Mapbox Style: "mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz"
