import React, { Suspense } from "react";
import "components/FontawsomeIcons";
import "./App.css";
import "./dark.css";
import Layout from "pages/_layouts/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "routes";
// import Home from "pages/_layouts/Home/index.js";
import Home from "pages/Home"; // Replace "Home" with the correct path to your home page component

import MarkersMap from "./pages/Leaflet/markers";
import CurrentLocation from "./pages/Leaflet/currentLocation";
import DrawMap from "./pages/Leaflet/draw";

import "./index.css";
import ShipDetails from "pages/Leaflet/details";


console.log(routes)
function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>


      <Route path={`/leaflet/markers`} element={<MarkersMap />} />
      <Route path={`/leaflet/user-location`} element={<CurrentLocation />} />
      <Route path={`/leaflet/draw-on-map`} element={<DrawMap />} />
      <Route path={`/leaflet/:mmsi`} element={<ShipDetails />} />
            <Route path="/" element={<Home />} />
            {/* <Route path="*" element={<PageNotFound />} /> */}
 
 
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
