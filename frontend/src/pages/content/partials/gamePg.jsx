import React from "react";
import game from "../../../data/game";
import GameGallery from "../../../components/content/partials/gamePg/gameGallery";

const gamePg = () => {
  return <GameGallery game={game} />;
};

export default gamePg;
