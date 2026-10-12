import React from "react";

const ContentFeatured = ({ category, featuredRef }) => {
  if (!category) return null;

  const videoId = category.video.split("/").pop();

  const videoUrl = `${category.video}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0`;

  return (
    <div
      ref={featuredRef}
      className="relative h-[650px] w-full overflow-hidden"
    >
      {/* <img
        src={category.image}
        alt={category.title}
        draggable="false"
        className="h-full w-full object-cover object-center"
      /> */}
      <iframe
        src={videoUrl}
        title={category.title}
        className="pointer-events-none absolute inset-0 h-full w-full"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-10 left-10 z-10">
        <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
          Content
        </p>

        <h1 className="mt-3 text-5xl font-semibold uppercase tracking-tight text-white">
          {category.title}
        </h1>

        <p className="mt-3 max-w-md text-xs leading-relaxed text-white/50">
          {category.description}
        </p>
      </div>
    </div>
  );
};

export default ContentFeatured;
