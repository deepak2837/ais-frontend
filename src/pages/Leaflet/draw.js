import React, { useState ,useEffect} from "react";
import Header from "components/Header";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import axios from 'axios';
import { MapContainer as  Map, TileLayer,Tooltip ,Marker,FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import osm from "./osm-providers";
import { useRef } from "react";
import "leaflet/dist/leaflet.css";

import ExternalInfo from "components/ExternalInfo";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png",
});

const markerIcon = new L.Icon({
  iconUrl: require("resources/images/marker.png"),
  iconSize: [40, 40],
  iconAnchor: [17, 46], //[left/right, top/bottom]
  popupAnchor: [0, -46], //[left/right, top/bottom]
});
const DrawMap = () => {
  const [center] = useState( {  lat: "18.987807",
  lng: "72.836447" });
  const ZOOM_LEVEL = 7;
  const mapRef = useRef();
  const [ships, setShips] = useState([]); // Add the cities state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://demos-mh4n.onrender.com/api/ships/markerdata', {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        setShips(response.data); // Set the cities state with the response data
        console.log(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);
  const _created = (e) => console.log(e);

  return (
    <>
      <Header title="Drishti" />

      <ExternalInfo page="leafletDraw" />

      <div className="row">
        <div className="col text-center">
          <h2> Draw shapes on map</h2>

          <div className="col">
            <Map center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            
              <FeatureGroup>
                <EditControl
                  position="topright"
                  onCreated={_created}
                  draw={
                    {
                      /* rectangle: false,
                    circle: false,
                    circlemarker: false,
                    marker: false,
                    polyline: false, */
                    }
                  }
                />
                 {ships.map((ship, idx) =>
               (


                <Marker
                  position={[ship.lng, ship.lat]}
                  icon={markerIcon}
                  key={idx}
                >
                  <Tooltip>
                    <b>
                      {ship.name}, {ship.timestamp}
                    </b>
                  </Tooltip>
                </Marker>
              )
              )}
              </FeatureGroup>
              <TileLayer
                url={osm.maptiler.url}
                attribution={osm.maptiler.attribution}
              />
            </Map>
          </div>
        </div>
      </div>
    </>
  );
};

export default DrawMap;
