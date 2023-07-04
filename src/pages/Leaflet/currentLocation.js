import React, { useState, useRef } from "react";
import { MapContainer as Map, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";

import Header from "components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useGeoLocation from "hooks/useGeoLocation";

const markerIcon = new L.Icon({
  iconUrl: require("resources/images/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46],
  popupAnchor: [0, -46],
});

const MarkersMap = () => {
  const [center] = useState( { lat: 19.0760, lng: 72.8777 });
  const ZOOM_LEVEL = 9;
  const mapRef = useRef();

  const location = useGeoLocation();

  const showMyLocation = () => {
    if (location.loaded && !location.error) {
      mapRef.current.flyTo(
        [location.coordinates.lat, location.coordinates.lng],
        ZOOM_LEVEL,
        { animate: true }
      );
    } else {
      alert(location.error.message);
    }
  };

  return (
    <>
      <Header title="Drishti" />

      <div className="row">
        <div className="col text-center">
          <h2>Get user location</h2>
          <p>it will locate user location with marker </p>
          <div className="col">
            <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />

              {location.loaded && !location.error && (
                <Marker
                  icon={markerIcon}
                  position={[
                    location.coordinates.lat,
                    location.coordinates.lng,
                  ]}
                ></Marker>
              )}
            </Map>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col d-flex justify-content-center">
          <button className="btn btn-primary" onClick={showMyLocation}>
            Locate Me <FontAwesomeIcon icon="globe" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;
