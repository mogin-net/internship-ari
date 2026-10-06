import React from "react";

const LoreDetail = ({ lore, onBack }) => {
  return (
    <div
      className="
        absolute
        left-[17%]
        top-[calc(50%+2.5rem)]
        z-30
        w-[26%]
        -translate-y-1/2
        pb-20
      "
    >
      {/* BACK */}
      <button
        onClick={onBack}
        className="
          mb-5
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white/40
          transition
          hover:text-white
        "
      >
        ← Back
      </button>

      {/* CATEGORY */}
      <p
        className="
          mb-2
          text-[10px]
          uppercase
          tracking-[0.25em]
          text-white/40
        "
      >
        {lore.category || "Unknown Category"}
      </p>

      {/* TITLE */}
      <h1
        className="
          text-4xl
          font-semibold
          uppercase
          tracking-tight
        "
      >
        {lore.title}
      </h1>

      {/* DESCRIPTION */}
      <p
        className="
          mt-7
          max-w-md
          text-xs
          leading-relaxed
          text-white/45
        "
      >
        {lore.description || "No description available."}
      </p>
    </div>
  );
};

export default LoreDetail;
