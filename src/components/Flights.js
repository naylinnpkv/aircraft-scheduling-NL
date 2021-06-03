import React, { useEffect, useState } from "react";

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
          <li>
            <div>Flight: {flight.id}</div>
            <div>
              {`${flight.origin} `}
              {flight.readable_departure}
            </div>
            <div>
              {flight.destination} {flight.readable_arrival}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
