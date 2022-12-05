import React, { useState } from "react";
import "./PlayingComponent.css";
import PlayingFieldComponent from "../PlayingFieldComponent/PlayingFieldComponent";
import TakeinHand from "../TakeinHand/TakeinHandComponent";
import play1 from "./img/play1.png";
import play2 from "./img/play2.png";
import play3 from "./img/play3.png";
import play4 from "./img/play4.png";
import flag from "./img/flag.png";

function PlayComponent() {
  return (
    <div className="playing__container">
      <div className="player__body">
        <div className="playing__item _item__1">
          <div className="cards_play__flex">
            <p className="_Player">Player 1</p>
            <img src={play1} />
            <img src={flag} className="flag__image" />
            <p className="level">Lv.5</p>
            <p className="strenght">St.5</p>
          </div>
          <div className="cards_play-1"><TakeinHand/></div>
        </div>
        <div className="playing__items">
          <div className="flex">
            <div className="cards_play-2-3"></div>
            <div className="_item">
              <p className="_Player">Player 2</p>
              <img src={play2} />
              <img src={flag} className="flag__image" />
              <p className="level">Lv.5</p>
              <p className="strenght">St.5</p>
            </div>
          </div>
          <div className="flex">
            <div className="_item__3">
              <p className="_Player">Player 3</p>
              <img src={play3} />
              <img src={flag} className="flag__image" />
              <p className="level">Lv.5</p>
              <p className="strenght">St.5</p>
            </div>
            <div className="cards_play-2-3"></div>
          </div>
        </div>
        <div className="playing__item _item__2">
          <div className="cards_play-4"></div>
          <div className="cards_play__flex _flex">
            <p className="_Player">Player 4</p>
            <img src={play4} />
            <img src={flag} className="flag__image" />
            <p className="level _lev">Lv.5</p>
            <p className="strenght _lev">St.5</p>
          </div>
        </div>
      </div>
      <PlayingFieldComponent />
    </div>
  );
}

export default PlayComponent;
