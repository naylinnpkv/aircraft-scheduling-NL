import React, { useState } from "react";

import "./styles/Rotations.style.css";

export const Rotations = ({ rotations, deleteRotation }) => {
  return (
    <div className="Rotation-container">
      Rotations
      <ul>
        {rotations.map((rotation, index) => (
          <li key={index}>
            <div> {rotation.id}</div>
            <div>
              <div>
                {`${rotation.origin} `}
                {rotation.readable_departure}
                {rotation.destination}
                {rotation.readable_arrival}
              </div>
            </div>
            <button onClick={() => deleteRotation(rotation.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
