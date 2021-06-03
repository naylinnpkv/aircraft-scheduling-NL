import React, { useState, useEffect } from "react";
import "./styles/Aircrafts.style.css";
export const Aircrafts = () => {
  const [aircrafts, setAircrafts] = useState([]);

  useEffect(() => {
    fetch("https://infinite-dawn-93085.herokuapp.com/aircrafts")
      .then((response) => response.json())
      .then((data) => setAircrafts(data.data));
  }, []);
  //   data: [
  //     {
  //     ident: "GABCD",
  //     type: "A320",
  //     economySeats: 186,
  //     base: "EGKK"
  //     }
  //     ]
  console.log(aircrafts[0]);

  return (
    <div className="aircrafts_component">
      <h1 className="title">Aircrafts</h1>

      <div className="container">
        <ul>
          {aircrafts.map((aircraft, index) => (
            <li className="aircraft" id="index">
              {aircraft.ident}
            </li>
          ))}
          <li className="aircraft">Mock Aircrafts</li>
          <li className="aircraft">Mock Aircrafts</li>
          <li className="aircraft">Mock Aircrafts</li>
          <li className="aircraft">Mock Aircrafts</li>{" "}
          <li className="aircraft">Mock Aircrafts</li>
          <li className="aircraft">Mock Aircrafts</li>
        </ul>
      </div>
    </div>
  );
};
