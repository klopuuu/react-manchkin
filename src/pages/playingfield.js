import React from "react";
import "../component/PlayingField/PlayingComponent.css";
import playing from "../assets/image/playing.jpg";
import PlayComponent from "../component/PlayingField/PlayingComponent";

function PlayingField() {
  return (
    <main>
      <center>
        <img src={playing} className="img-playing" />
      </center>
      <PlayComponent />
    </main>
  );
}

export default PlayingField;
