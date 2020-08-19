import React from 'react';
import MapGL, { Marker } from 'react-map-gl';
import './Map.css';

const mapboxStyle = `mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz`;
const MAPBOX_TOKEN =
  'pk.eyJ1IjoibW9oYW1tZWRpbXJhbiIsImEiOiJja2RycXQ5c3Awa2FsMnhsaWFvbWtlODA4In0.jtknVybx_G-vUlwAbnspfQ';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9C20.1,15.8,20.2,15.8,20.2,15.7z`;
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
  const resetMarker = () => {
    setViewport({ ...viewport, zoom: 12, latitude, longitude });
  };
  return (
    <>
      <p id="coordinate">
        {latitude},{longitude}
      </p>
      <div className="map-container" role="application">
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
        <div className="btn-container">
          <button id="recenter-btn" onClick={resetMarker}>
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="compress-arrows-alt"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="svg-inline--fa fa-compress-arrows-alt fa-w-16 fa-3x"
            >
              <path
                fill="currentColor"
                d="M200 288H88c-21.4 0-32.1 25.8-17 41l32.9 31-99.2 99.3c-6.2 6.2-6.2 16.4 0 22.6l25.4 25.4c6.2 6.2 16.4 6.2 22.6 0L152 408l31.1 33c15.1 15.1 40.9 4.4 40.9-17V312c0-13.3-10.7-24-24-24zm112-64h112c21.4 0 32.1-25.9 17-41l-33-31 99.3-99.3c6.2-6.2 6.2-16.4 0-22.6L481.9 4.7c-6.2-6.2-16.4-6.2-22.6 0L360 104l-31.1-33C313.8 55.9 288 66.6 288 88v112c0 13.3 10.7 24 24 24zm96 136l33-31.1c15.1-15.1 4.4-40.9-17-40.9H312c-13.3 0-24 10.7-24 24v112c0 21.4 25.9 32.1 41 17l31-32.9 99.3 99.3c6.2 6.2 16.4 6.2 22.6 0l25.4-25.4c6.2-6.2 6.2-16.4 0-22.6L408 360zM183 71.1L152 104 52.7 4.7c-6.2-6.2-16.4-6.2-22.6 0L4.7 30.1c-6.2 6.2-6.2 16.4 0 22.6L104 152l-33 31.1C55.9 198.2 66.6 224 88 224h112c13.3 0 24-10.7 24-24V88c0-21.3-25.9-32-41-16.9z"
                class=""
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Map;

/*
For interactive map use this 👇 in ReactMapGL
onViewportChange={(nextViewport) => setViewport(nextViewport)}
*/
