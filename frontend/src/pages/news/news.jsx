import React, { useState } from "react";

import NewsGallery from "../../components/news/newsGallery";
import NewsDetail from "../../components/news/newsDetail";

const News = () => {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#101010] text-white">
      {!selectedNews ? (
        <NewsGallery onSelectNews={setSelectedNews} />
      ) : (
        <NewsDetail news={selectedNews} onBack={() => setSelectedNews(null)} />
      )}
    </main>
  );
};

export default News;
