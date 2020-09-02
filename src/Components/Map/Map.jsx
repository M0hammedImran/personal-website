import React from 'react';
import MapGL, { Marker } from 'react-map-gl';

import './Map.scss';

import { ReactComponent as MarkerIcon } from '../../assets/svg_icons/map_marker_icon.svg';
import { ReactComponent as ReCenterIcon } from '../../assets/svg_icons/recenter_icon.svg';

const mapboxStyle = `mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz`;
const MAPBOX_TOKEN =
  'pk.eyJ1IjoibW9oYW1tZWRpbXJhbiIsImEiOiJja2RycXQ5c3Awa2FsMnhsaWFvbWtlODA4In0.jtknVybx_G-vUlwAbnspfQ';

const latitude = 12.957651;
const longitude = 77.618056;

const markerStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none',
  transform: 'translateY(-10px)',
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
            <MarkerIcon style={markerStyle} />
          </Marker>
        </MapGL>
        <div className="btn-container">
          <button id="recenter-btn" onClick={resetMarker}>
            <ReCenterIcon />
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

// * myLocation: [12.957651, 77.618056]
// ? Mapbox Style: "mapbox://styles/mohammedimran/ckdr0oy7y0is919nlc28zs1kz"
