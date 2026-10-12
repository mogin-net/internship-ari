import React from "react";
import anime from "../../../data/anime";
import AnimeGallery from "../../../components/content/partials/animePg/animeGallery";

const animePg = () => {
  return <AnimeGallery anime={anime} />;
};

export default animePg;
