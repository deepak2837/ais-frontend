import React, { useState, useEffect } from "react";
import "./VesselDetails.css";
import { useParams } from "react-router-dom";

const ShipDetails = () => {
  const { mmsi } = useParams();
  const [shipData, setShipData] = useState(null);

  useEffect(() => {
    const fetchShipData = async () => {
      try {
        const response = await fetch(`https://demos-mh4n.onrender.com/api/ships/${mmsi}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        console.log(data)
        setShipData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShipData();
  }, [mmsi]);

  if (!shipData) {
    return <div>Loading...</div>;
  }

  const {
   
    vesselName,
    imoNumber,
    shipType,
    flag,
    grossTonnage,
    summerDeadweight,
    lengthOverall,
    beam,
    yearOfBuilt,
    registeredOwner,
    year,
  } = shipData;

  // Generate the static image URL based on the mmsi number
  const image = shipData.image ? `/images/${mmsi}.jpg` : '/images/dummy.jpg';

  return (
    <div className="vessel-details-container">
      <div className="image-container">
        <img src={image} alt={vesselName} />
      </div>
      <div className="details-container">
        <h2>{vesselName}</h2>
        <ul>
          <li>
            <strong>MMSI:</strong> {mmsi}
          </li>
          <li>
            <strong>IMO Number:</strong> {imoNumber}
          </li>
          <li>
            <strong>Ship Type:</strong> {shipType}
          </li>
          <li>
            <strong>Flag:</strong> {flag}
          </li>
          <li>
            <strong>Gross Tonnage:</strong> {grossTonnage}
          </li>
          <li>
            <strong>Summer Deadweight:</strong> {summerDeadweight}
          </li>
          <li>
            <strong>Length Overall:</strong> {lengthOverall}
          </li>
          <li>
            <strong>Beam:</strong> {beam}
          </li>
          <li>
            <strong>Year of Built:</strong> {yearOfBuilt}
          </li>
          <li>
            <strong>Registered Owner:</strong> {registeredOwner}
          </li>
          <li>
            <strong>Year:</strong> {year}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShipDetails;
