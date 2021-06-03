import React, { useState, useEffect } from "react";
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
    <div>
      <h1>Aircrafts</h1>
      <ul>
        {aircrafts.map((aircraft, index) => (
          <li>{aircraft.ident}</li>
        ))}

        <li>Mock Aircrafts</li>
      </ul>
    </div>
  );
};
