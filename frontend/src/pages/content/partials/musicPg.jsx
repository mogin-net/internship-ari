import React from "react";
import music from "../../../data/music";
import MusicGallery from "../../../components/content/partials/musicPg/musicGallery";

const musicPg = () => {
  return <MusicGallery music={music} />;
};

export default musicPg;
