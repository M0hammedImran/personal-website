import React from 'react';

import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps';

import './App.css';

const Map = () => {
  return (
    <GoogleMap
      defaultCenter={{ lat: 12.957613, lng: 77.618746 }}
      defaultZoom={16}
    />
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const App = () => {
  return (
    <div className="App">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCTfTyzsSzVx4N5cM3K3ivhzPgyU9H8CFY&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: '100%' }} />}
        mapElement={<div style={{ height: '100%' }} />}
      />
    </div>
  );
};

export default App;

//
// compose(
//   withProps({
//     googleMapURL:
//       'https://maps.googleapis.com/maps/api/js?key=AIzaSyCTfTyzsSzVx4N5cM3K3ivhzPgyU9H8CFY&v=3.exp&libraries=geometry,drawing,places',
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `400px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )(({ isMarkerShown, defaultZoom, defaultCenter }) => (
//   <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
//     {isMarkerShown && <Marker position={defaultCenter} />}
//   </GoogleMap>
// ));

// 12.957651, 77.618056

// // eslint-disable-next-line no-unused-vars
// const [mapDefault, setMapDefault] = useState({
//   center: {
//     lat: 12.957613,
//     lng: 77.618746,
//   },
//   zoom: 16,
// });

/* <MyMapComponent
  isMarkerShown={false}
  defaultZoom={mapDefault.zoom}
  defaultCenter={mapDefault.center}
/> */
