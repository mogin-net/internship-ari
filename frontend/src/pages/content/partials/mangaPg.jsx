import React from "react";
import manga from "../../../data/manga";
import MangaGallery from "../../../components/content/partials/mangaPg/mangaGallery";

const mangaPg = () => {
  return <MangaGallery manga={manga} />;
};

export default mangaPg;
