import React, { useState, useRef, useEffect } from "react";
import { MapContainer as Map, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";
import axios from 'axios';
import "leaflet/dist/leaflet.css";
import osm from "./osm-providers";
import PrintControl from "./PrintControl";
import Header from "components/Header";
import { useNavigate } from "react-router-dom";

function TooltipCircle({ ship }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/leaflet/${ship.mmsi}`);
  };

  return (
    <Marker
      position={[ship.lng, ship.lat]}
      eventHandlers={{ click: handleClick }}
      icon={markerIcon}
    >
      <Tooltip>{ship.name} {ship.timestamp}</Tooltip>
    </Marker>
  );
}

const markerIcon = L.icon({
  iconUrl: require("resources/images/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});

const MarkersMap = () => {
  const [center] = useState({
    lat: "18.987807",
    lng: "72.836447",
  });
  const ZOOM_LEVEL = 7;
  const mapRef = useRef();
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Check if the data is already stored in local storage
      const cachedData = localStorage.getItem('shipData');
      if (cachedData) {
        setShips(JSON.parse(cachedData));
      } else {
        try {
          const response = await axios.get('https://demos-mh4n.onrender.com/api/ships/markerdata', {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          setShips(response.data);
          localStorage.setItem('shipData', JSON.stringify(response.data));
          console.log(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header title="Drishti" />

      <div className="row">
        <div className="col text-center">
          <h2>Adding Markers to react leaflet</h2>
          <p>Loading basic map using layer from maptiler</p>
          <div className="col">
            <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <PrintControl mapRef={mapRef} />
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />

              {ships.map((ship, idx) => (
                <TooltipCircle ship={ship} key={idx} />
              ))}
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarkersMap;
