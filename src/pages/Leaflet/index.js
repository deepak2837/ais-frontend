import React from "react";
import { Routes, Route, useMatch } from "react-router-dom";

import MarkersMap from "./markers";
import CurrentLocation from "./currentLocation";
import ShipDetails from "./details";
import DrawMap from "./draw";

import "./index.css";

const Leaflet = () => {
  const path = useMatch("/leaflet")
  console.log(path);
  return (
    <Routes path={path}>

      <Route path={`/leaflet/markers`} element={<MarkersMap />} />
      <Route path={`/leaflet/user-location`} element={<CurrentLocation />} />
      <Route path={`/leaflet/draw-on-map`} element={<DrawMap />} />
      <Route path={`/leaflet/:mmsi`} element={<ShipDetails />} />
  
    </Routes>
  );
};

export default Leaflet;
