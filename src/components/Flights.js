import React, { useEffect, useState } from "react";
import "./styles/Flights.style.css";
export const Flights = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() =>
    fetch("https://infinite-dawn-93085.herokuapp.com/flights")
      .then((response) => response.json())
      //setting the array with the array with flights
      .then((data) => setFlights(data.data))
  );

  return (
    <div>
      I am flights
      <ul>
        {flights.map((flight, index) => (
          <li className="flight">
            <div>Flight: {flight.id}</div>
            <div className="flight_information">
              <div className="location_time">
                {`${flight.origin} `}<br/>
                {flight.readable_departure}
              </div>
              <div>
                {flight.destination} <br/>{flight.readable_arrival}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
