import React from "react";

const LoreCategory = ({
  categories = [],
  selectedCategory,
  onCategoryChange,
  categoryRef,
}) => {
  return (
    <div
      ref={categoryRef}
      className="
        absolute
        left-[2%]
        top-1/2
        z-40
        w-[180px]
        -translate-y-1/2
      "
    >
      <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-white/30">
        Lore
      </p>

      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/70">
        Categories
      </p>

      <div className="flex flex-col gap-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`
                group relative flex w-full items-center
                border-l px-3 py-2.5
                text-left
                transition-all duration-300

                ${
                  isActive
                    ? "border-white bg-white/[0.06]"
                    : "border-white/10 hover:border-white/40 hover:bg-white/[0.03]"
                }
              `}
            >
              {isActive && (
                <span
                  className="
                    absolute
                    left-[-1px]
                    top-0
                    h-full
                    w-[2px]
                    bg-white
                  "
                />
              )}

              <span
                className={`
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  transition-all duration-300

                  ${
                    isActive
                      ? "text-white"
                      : "text-white/35 group-hover:text-white/70"
                  }
                `}
              >
                {category}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LoreCategory;
