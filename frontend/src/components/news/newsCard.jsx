import React from "react";

const NewsCard = ({ news, onClick }) => {
  return (
    <button onClick={() => onClick(news)} className="group w-full text-left">
      <div className="grid grid-cols-[140px_220px_1fr] items-center gap-6 border border-white/10 bg-white/[0.03] px-7 py-6 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20">
        {/* Category & Date */}
        <div className="flex h-full flex-col justify-between">
          <span className="w-fit bg-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white/70">
            {news.category}
          </span>

          <p className="mt-8 text-[11px] text-white/45">
            {new Date(news.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>

        {/* Thumbnail */}
        <div className="overflow-hidden border border-white/10">
          <img
            src={news.thumbnail}
            alt={news.title}
            className="h-[115px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <div className="flex h-full flex-col justify-between py-1">
          <h2 className="text-lg font-semibold text-white/75 transition-colors group-hover:text-white">
            {news.title}
          </h2>

          <span className="text-[11px] text-white/40 transition-colors group-hover:text-amber-500">
            View More &gt;
          </span>
        </div>
      </div>
    </button>
  );
};

export default NewsCard;
