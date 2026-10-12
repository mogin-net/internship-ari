import React from "react";

const ContentCard = ({ category, isActive, onHover, onClick }) => {
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(category)}
      onClick={() => onClick(category)}
      className={`
        group relative flex h-full w-full items-center
        overflow-hidden
        border border-white/10
        px-6
        text-left
        transition-all duration-300
        ${
          isActive
            ? "border-white/40 bg-white/[0.08]"
            : "bg-white/[0.02] hover:border-white/30 hover:bg-white/[0.05]"
        }
      `}
    >
      <div className="relative z-10 flex-1">
        <p
          className={`
            text-[11px] uppercase tracking-[0.25em]
            transition-all duration-300
            ${
              isActive
                ? "text-white"
                : "text-white/45 group-hover:text-white/80"
            }
          `}
        >
          {category.title}
        </p>

        <p
          className={`
            mt-2 text-[10px] leading-relaxed
            transition-all duration-300
            ${
              isActive
                ? "text-white/55"
                : "text-white/25 group-hover:text-white/45"
            }
          `}
        >
          {category.description}
        </p>
      </div>

      <span
        className={`
          relative z-10 ml-5 text-xl
          transition-all duration-300
          ${
            isActive
              ? "translate-x-0 text-white"
              : "-translate-x-2 text-white/20 group-hover:translate-x-0 group-hover:text-white/60"
          }
        `}
      >
        →
      </span>
    </button>
  );
};

export default ContentCard;
