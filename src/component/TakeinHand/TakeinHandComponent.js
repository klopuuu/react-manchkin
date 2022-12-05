import React, { useState } from "react";
import "./TakeinHandComponent.css";

function TakeinHand() {
  const handleMouseEnter = (e) => {
    const box = e.target.closest(".card");
    box.style.transform = 'scale(1.35)'
  };

  const handleMouseLeave = (e) => {
    const box = e.target.closest(".card");
    box.style.width = "120px";
    box.style.height = "155px";
    box.style.transform = "none";
  };
  return (
    <div className="TakeinHand__container">
      <div className="TakeinHand__cards">
        <div
          className="card"
          onMouseEnter={(e) => handleMouseEnter(e)}
          onMouseLeave={(e) => handleMouseLeave(e)}
        ></div>
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
        <div
          className="card"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>
    </div>
  );
}

export default TakeinHand;
