import React from 'react';
import MapGL, { Marker } from 'react-map-gl';

const mapboxStyle = `mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz`;

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9C20.1,15.8,20.2,15.8,20.2,15.7z`;
const MAPBOX_TOKEN =
  'pk.eyJ1IjoibW9oYW1tZWRpbXJhbiIsImEiOiJja2RycXQ5c3Awa2FsMnhsaWFvbWtlODA4In0.jtknVybx_G-vUlwAbnspfQ';
const SIZE = 20;
const latitude = 12.957651;
const longitude = 77.618056;

const markerStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none',
  transform: `translateY(${-SIZE / 2}px)`,
};

const Map = ({ viewport, setViewport }) => {
  return (
    <div>
      <MapGL
        mapStyle={mapboxStyle}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
      >
        <Marker latitude={latitude} longitude={longitude}>
          <svg height={SIZE} viewBox="0 0 24 24" style={markerStyle}>
            <path d={ICON} />
          </svg>
        </Marker>
      </MapGL>
    </div>
  );
};

export default Map;

/*
For interactive map use this 👇 in ReactMapGL
onViewportChange={(nextViewport) => setViewport(nextViewport)}
*/
