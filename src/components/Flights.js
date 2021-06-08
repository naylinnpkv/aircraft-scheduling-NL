import React, { useEffect, useState } from "react";

import { Rotations } from "./Rotations";
//___________________COMPONENT_____________//

import "./styles/Flights.style.css";
//___________________STYLE__________________//

export const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [rotations, setRotations] = useState([]);

  //________________________STATE_______________//
  useEffect(() =>
    fetch("https://infinite-dawn-93085.herokuapp.com/flights")
      .then((response) => response.json())
      //setting the array with the array with flights
      .then((data) => setFlights(data.data))
  );

  const addRotation = (id) => {
    console.log(rotations);
    setRotations([...rotations, id]);
  };

  return (
    <div className="flight-container">
      I am flights
      <ul className="flight-card">
        {flights.map((flight, index) => (
          <li className="flight">
            <div> {flight.id}</div>
            <div className="flight_information">
              <div className="location_time">
                {`${flight.origin} `}
                {flight.readable_departure}
                {flight.destination}
                {flight.readable_arrival}
              </div>
              <button onClick={() => addRotation(flight.id)}>ADD</button>
            </div>
          </li>
        ))}
      </ul>
      <Rotations id={rotations} />
    </div>
  );
};
