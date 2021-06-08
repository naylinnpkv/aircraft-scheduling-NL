import React, { useState, useEffect } from "react";
import { Flights } from "./Flights";

import "./styles/Aircrafts.style.css";
export const Aircrafts = () => {
  const [aircrafts, setAircrafts] = useState([]);

  useEffect(() => {
    fetch("https://infinite-dawn-93085.herokuapp.com/aircrafts")
      .then((response) => response.json())
      .then((data) => setAircrafts(data.data));
  }, []);

  return (
    <div className="aircrafts_component">
      <h1 className="title">Aircrafts</h1>

      <div className="container">
        <ul>
          {aircrafts.map((aircraft, index) => (
            <li className="aircraft" key={index}>
              {aircraft.ident}
            </li>
          ))}
        </ul>
      </div>
      <Flights />
    </div>
  );
};
