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
    if (routeChecker(rotations, flightToAdd) === false) {
      alert("route conflicts");
      return;
    }
    // console.log(
    //   "arrival",
    //   rotations[rotations.length - 1].arrivaltime,
    //   flightToAdd.departuretime
    // );
    if (
      rotations.length > 0 &&
      restTimeAndScheduleCollisionChecker(
        rotations[rotations.length - 1].arrivaltime,
        flightToAdd.departuretime,
        rotations
      ) === false
    ) {
      alert(
        "Scheduling Collision and aircraft turnaround time needs atleast 20 mins"
      );
      return;
    }

    flights.filter((flight, index) => {
      if (flight.id === flightToAdd.id) {
        setRotations([...rotations, flight]);
      }
    });

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
    if (arr.length === 0) {
      return;
    }
    let lastIndex = arr.length - 1;
    console.log(arr[lastIndex], obj, arr.length);
    return arr[lastIndex].destination !== obj.origin ? false : true;
  };
  const restTimeAndScheduleCollisionChecker = (
    oldArrival,
    newDeparture,
    rotations
  ) => {
    if (rotations.length === 0) {
      console.log("it's empty");
      return true;
    }
    if (newDeparture - oldArrival < 20) {
      return false;
    }

    return true;
  };
  //__________________Util Functions_____________//
  return (
    <div className="flight-container">
      I am flights
      <ul className="flight-card">
        {flights.map((flight, index) => (
          <li className="flight" key={index}>
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
