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
  //_______________________Callbacks and Handlers___________________//

  //will add the flight to rotation if user want
  const addRotation = (flightToAdd) => {
    if (flights.length > 0) {
      if (routeChecker(flights, flightToAdd) === false) {
        console.log(routeChecker(flights, flightToAdd));
        alert("route conflicts");
        return;
      }
    }

    flights.filter((flight, index) => {
      if (flight.id === flightToAdd.id) {
        setRotations([...rotations, flight]);
      }
    });
    console.log(rotations.length);
    return;
  };

  //will delete the rotation if user wish to
  const deleteRotation = (id) => {
    const newRotation = [...rotations];
    setRotations(newRotation.filter((rotation) => rotation.id !== id));
  };
  //____________________Callbacks and Handlers_________________________//

  //_______________Util Functions_______________//
  const routeChecker = (arr, obj) => {
    let lastIndex = arr.length - 1;
    console.log(arr[lastIndex].destination, obj.origin);
    return arr[lastIndex].destination !== obj.origin ? false : true;
  };

  //__________________Util Functions_____________//
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
              <button onClick={() => addRotation(flight)}>ADD</button>
            </div>
          </li>
        ))}
      </ul>
      <Rotations rotations={rotations} deleteRotation={deleteRotation} />
    </div>
  );
};
