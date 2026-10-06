import React from "react";

const CategoryBadge = ({ category }) => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        left-[15%]
        top-[calc(50%+2.5rem)]
        z-10
        flex
        w-[18%]
        -translate-y-1/2
        flex-col
        items-center
        gap-4
        text-center
      "
    >
      <p
        className="
          text-2xl
          font-semibold
          max-w-full
          wrap-break-word
          uppercase
          tracking-[0.3em]
          text-white/60
        "
      >
        {category}
      </p>
    </div>
  );
};

export default CategoryBadge;
