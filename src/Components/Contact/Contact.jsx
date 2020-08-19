import React, { useState } from 'react';
import Map from '../Map/Map';

import './Contact.css';

function Contact() {
  const [viewport, setViewport] = useState({
    width: '400px',
    height: '400px',
    zoom: 12,
    bearing: 0,
    pitch: 0,
    latitude: 12.957651,
    longitude: 77.618056,
  });

  return (
    <div id="Contact">
      <div className="map">
        <Map viewport={viewport} setViewport={setViewport} />
      </div>
    </div>
  );
}

export default Contact;
