import React, { useState } from "react";
import "./PlayingFieldComponent.css";
import door from "./img/door.png";
import riches from "./img/riches.png";
function PlayingFieldComponent() {
  const handleClick = (e) => {
    e.preventDefault();
    e.target.style.display = "none";
  };

  return (
    <div className="player__game">
      <div className="player_door_riches">
        <div className="_door">
          <div className="block"></div>
          <img src={door} className="img_door _cards" />
          <div className="block"></div>
          <img
            src={door}
            className="img_door _cards"
            onClick={(e) => handleClick(e)}
          />
          <div className="block" onClick={(e) => handleClick(e)}></div>
          <img
            src={door}
            className="img_door _cards"
            onClick={(e) => handleClick(e)}
          />
        </div>
        <div className="_riches">
          <div className="block"></div>
          <img src={riches} className="img_riches _cards" />
          <div className="block"></div>
          <img src={riches} className="img_riches _cards" />
          <div className="block"></div>
          <img src={riches} className="img_riches _cards" />
        </div>
      </div>
    </div>
  );
}

export default PlayingFieldComponent;
