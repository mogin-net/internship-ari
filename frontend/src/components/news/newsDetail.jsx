import React, { useEffect, useState } from "react";

const NewsDetail = ({ news, onBack }) => {
  const [newsDetail, setNewsDetail] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3000/news/${news.slug}`);

        if (!response.ok) {
          throw new Error("Failed to fetch news detail");
        }

        const result = await response.json();
        setNewsDetail(result.data);
      } catch (error) {
        console.error("Failed to fetch news detail:", error);
      }
    };

    fetchNewsDetail();
  }, [news.slug]);

  if (!newsDetail) {
    return (
      <section className="relative min-h-screen px-[8%] py-32 text-white">
        <p className="text-white/50">Loading...</p>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen px-[8%] py-32">
      {/* Back */}
      <button
        onClick={onBack}
        className="mb-8 flex items-center gap-4 border border-white/15 px-8 py-3 text-sm text-white/70 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
      >
        <span>‹</span>
        <span>Back</span>
      </button>

      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-3 text-sm text-white/35">
        <span>HOME</span>
        <span>&gt;</span>
        <span>NEWS</span>
        <span>&gt;</span>
        <span>{newsDetail.category}</span>
        <span>&gt;</span>
        <span className="text-white/60">{newsDetail.title}</span>
      </div>

      {/* Article */}
      <article className="mx-auto max-w-[1000px] border border-white/10 bg-black/30 px-14 py-10 backdrop-blur-md">
        {/* Title */}
        <h1 className="text-3xl font-semibold leading-tight text-white">
          {newsDetail.title}
        </h1>

        {/* Date and Category */}
        <div className="mt-6 flex items-center gap-8 text-sm">
          <span className="text-white/40">
            {new Date(newsDetail.publishedAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>

          <span className="text-cyan-400">{newsDetail.category}</span>
        </div>

        {/* Divider */}
        <div className="mt-7 border-t border-white/20" />

        {/* Article Content */}
        <div className="mt-9 space-y-7">
          {newsDetail.blocks?.map((block) => {
            /* Heading */
            if (block.type === "heading") {
              return (
                <h2
                  key={block.id}
                  className="text-2xl font-semibold text-cyan-400"
                >
                  {block.content}
                </h2>
              );
            }

            /* Subheading */
            if (block.type === "subheading") {
              return (
                <h3 key={block.id} className="text-lg font-semibold text-white">
                  {block.content}
                </h3>
              );
            }

            /* Image */
            if (block.type === "image") {
              return (
                <div
                  key={block.id}
                  className="overflow-hidden border border-white/10"
                >
                  <img
                    src={block.content}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
              );
            }

            /* List */
            if (block.type === "list") {
              return (
                <ul
                  key={block.id}
                  className="list-disc space-y-2 pl-6 text-[15px] leading-8 text-white/70"
                >
                  {block.content.split("\n").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              );
            }
            if (block.type === "link") {
              const [label, url] = block.content.split("|");

              return (
                <a
                  key={block.id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  {label}
                </a>
              );
            }

            /* Paragraph */
            return (
              <p key={block.id} className="text-[15px] leading-8 text-white/70">
                {block.content}
              </p>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default NewsDetail;
