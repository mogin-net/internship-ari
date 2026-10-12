import React from "react";

import contentCategories from "../../data/contentCategories";
import ContentGallery from "../../components/content/contentGallery";

const Content = () => {
  return <ContentGallery categories={contentCategories} />;
};

export default Content;
