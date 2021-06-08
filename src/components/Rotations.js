import React, { useState } from "react";

import "./styles/Rotations.style.css";

export const Rotations = ({ id }) => {
  return (
    <div className="Rotation-container">
      I am Rotations
      <ul>
        {id.map((rotation, index) => (
          <li>{rotation}</li>
        ))}
      </ul>
    </div>
  );
};
