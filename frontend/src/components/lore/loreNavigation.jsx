import React from "react";

const LoreNavigation = ({ onPrevious, onNext, variant = "detail" }) => {
  return (
    <div
      className={
        variant === "carousel"
          ? "z-30 flex w-full items-center justify-between"
          : "z-30 flex w-full justify-end gap-2"
      }
    >
      <button
        onClick={onPrevious}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          border
          border-white/20
          text-white/50
          transition
          hover:border-white
          hover:text-white
        "
      >
        ←
      </button>

      <button
        onClick={onNext}
        className="
          flex
          h-10
          w-10
          items-center
          justify-center
          border
          border-white/20
          text-white/50
          transition
          hover:border-white
          hover:text-white
        "
      >
        →
      </button>
    </div>
  );
};

export default LoreNavigation;
