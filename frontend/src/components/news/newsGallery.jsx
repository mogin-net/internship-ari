import React, { useEffect, useState } from "react";
import NewsCard from "./newsCard";

const NewsGallery = ({ onSelectNews }) => {
  const [activeCategory, setActiveCategory] = useState("Latest");
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("http://localhost:3000/news");
        const result = await response.json();

        setNewsData(result.data);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchNews();
  }, []);

  const categories = ["Latest", "Info", "Updates"];

  const filteredNews =
    activeCategory === "Latest"
      ? newsData
      : newsData.filter((news) => news.category === activeCategory);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#101010] px-[8%] py-32 text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.035),transparent_45%)]" />

      <div className="relative">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
            Archive
          </p>

          <h1 className="mt-2 text-4xl font-light tracking-[0.12em] text-white">
            NEWS
          </h1>
        </div>

        {/* Filter */}
        <div className="mb-10 flex w-fit">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                                min-w-[150px]
                                border
                                border-white/10
                                px-8
                                py-3
                                text-xs
                                uppercase
                                tracking-[0.12em]
                                transition-all
                                ${
                                  activeCategory === category
                                    ? "bg-white text-black"
                                    : "bg-white/[0.03] text-white/45 hover:bg-white/[0.07] hover:text-white"
                                }
                            `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News List */}
        <div className="space-y-4">
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} onClick={onSelectNews} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGallery;
