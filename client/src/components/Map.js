import React, { useState, useEffect } from "react";
import ReactMapGl, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ProfileMarker from "./ProfileMarker";
// import Direction from "./Direction";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoia2F3dGhlci1hZGFtIiwiYSI6ImNsMmV0MDl6cDAyeWEzYmtqM2RrYzZqdnAifQ.3fhbL55o18a4Q0FmeBL9ow";

function Map(props) {
  const { profiles } = props;

  return (
    <ReactMapGl
      initialViewState={{
        latitude: 52.5151746,
        longitude: -1.898075,
        zoom: 14,
      }}
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "left",
        padding: "30px",
        marginTop:"10px",

     
      }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      {profiles &&
        profiles.map((profile) => (
          <ProfileMarker
            longitude={profile.geometry.longitude}
            latitude={profile.geometry.latitude}
            color="red"
            user={profile}
          />
        ))}
      {/* <Direction/> */}
      <GeolocateControl />
      <NavigationControl />
    </ReactMapGl>
  );
}

export default Map;
