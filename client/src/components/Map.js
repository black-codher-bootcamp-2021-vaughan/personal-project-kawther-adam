import React, { useState, useEffect } from "react";
import ReactMapGl, { Marker, Popup } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';



// export default function Map() {
//   const [viewport, setViewport] = useState({
//     latitude: 52.5151746,
//     longitude: -1.898075,
//     width: "100vw",
//     height: "100vh",
//     zoom: 10
//   });s
const MAPBOX_TOKEN = "pk.eyJ1Ijoia2F3dGhlci1hZGFtIiwiYSI6ImNsMmV0MDl6cDAyeWEzYmtqM2RrYzZqdnAifQ.3fhbL55o18a4Q0FmeBL9ow"

function Map(props) {
  const {profiles}=props
  return (
    <ReactMapGl
      initialViewState={{
        latitude: 52.5151746,
        longitude:-1.898075,
        zoom: 14
      }}
      style={{width: 800, height: 600}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {profiles && profiles.map(profile=>  <Marker longitude={profile.geometry.coordinates[1]} latitude={profile.geometry.coordinates[0]} color="red" /> )}
      
    </ReactMapGl>
  );
}
  
export default Map;
//   return (
//     <div>
//     <ReactMapGl
//         {...viewport}
//         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//         // onViewportChange={viewport => {
//         //   setViewport(viewport);
//         // }}

//       ></ReactMapGl>
     
//       </div>
//   );
// }