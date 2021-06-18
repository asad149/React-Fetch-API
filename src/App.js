import React, { useEffect, useState } from "react";
//import logo from './logo.svg';
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// import "leaflet/dist/leaflet.css"

import "./App.css"

function App() {

  return (
    <div className="App">
      <h1>My GitHub Repositries..!</h1>
        <MapContainer center={[30.3753, 69.3451]} zoom={5} scrollWheelZoom={true} style={{height: "300"}}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[24.8607, 67.0011]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>

    </div>
  );
}

export default App;
