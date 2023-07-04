import React from "react";
import leafletImage from "leaflet-image";
import { saveAs } from "file-saver";
import "./index.css"; // Import custom CSS file for styling

const PrintControl = ({ mapRef }) => {
  const handleSaveAsPng = () => {
    const map = mapRef.current;
    if (!map) return;

    leafletImage(map, function (err, canvas) {
      if (err) {
        console.error("Error saving map as PNG:", err);
        return;
      }

      canvas.toBlob(function (blob) {
        saveAs(blob, "map.png");
      });
    });
  };

  return (
    <div className="leaflet-bottom leaflet-left leaflet-control-custom">
      <div className="leaflet-control">
        <button onClick={handleSaveAsPng}>Save as PNG</button>
      </div>
    </div>
  );
};

export default PrintControl;
