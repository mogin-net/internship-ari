import React from "react";

const AnimeCard = ({ anime }) => {
  const handleClick = () => {
    window.open(anime.link, "_blank");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="
        group relative h-[260px] w-full
        overflow-hidden
        border border-white/10
        text-left
      "
    >
      <img
        src={anime.image}
        alt={anime.title}
        draggable="false"
        className="
          h-full w-full
          object-cover
          transition-transform duration-500
          group-hover:scale-105
        "
      />

      <div
        className="
          absolute inset-0
          flex items-center justify-center
          bg-white/0
          opacity-0
          transition-all duration-300
          group-hover:bg-black/50
          group-hover:opacity-100
        "
      >
        <span
          className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white
          "
        >
          View More
        </span>
      </div>

      <div
        className="
          absolute inset-x-0 bottom-0
          bg-gradient-to-t from-black/90 to-transparent
          px-5 pb-5 pt-12
        "
      >
        <p
          className="
            text-sm
            uppercase
            tracking-[0.15em]
            text-white
          "
        >
          {anime.title}
        </p>
      </div>
    </button>
  );
};

export default AnimeCard;
