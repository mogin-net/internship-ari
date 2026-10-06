import React from "react";

const LoreCarousel = ({ lore, selectedLore, onLoreClick, galleryRef }) => {
  return (
    <div
      className="
        h-[600px]
        w-full
        overflow-hidden
      "
    >
      <div
        ref={galleryRef}
        className="
          flex
          h-full
          w-max
          gap-3
        "
      >
        {lore.map((lore, index) => {
          const isSelected = selectedLore?.id === lore.id;

          const isNext = selectedLore && index === 1;

          return (
            <div
              key={lore.id}
              data-lore-id={lore.id}
              onClick={() => onLoreClick(lore)}
              className={`
                group
                relative
                h-full
                shrink-0
                cursor-pointer
                overflow-hidden
                transition-[width,scale]
                duration-500

                ${
                  selectedLore
                    ? isSelected
                      ? "w-[220px] min-w-[220px] scale-[1.005]"
                      : "w-[90px] min-w-[90px]"
                    : "w-[150px] min-w-[150px]"
                }

                ${
                  isNext
                    ? "after:absolute after:inset-y-0 after:right-0 after:w-full after:bg-gradient-to-r after:from-transparent after:via-black/40 after:to-black after:backdrop-blur-[2px]"
                    : ""
                }
              `}
            >
              <img
                src={`http://localhost:3000/lore/${lore.id}/image`}
                alt={lore.title}
                draggable="false"
                className={`
                  h-full
                  w-full
                  select-none
                  object-cover
                  object-center
                  transition-all
                  duration-500

                  ${
                    isSelected
                      ? "grayscale-0 brightness-100"
                      : "grayscale brightness-[0.4]"
                  }
                `}
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-transparent
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  bottom-8
                  left-5
                  z-10
                "
              >
                <p
                  className={`
                    uppercase
                    tracking-[0.12em]
                    transition-all
                    duration-300

                    ${
                      isSelected
                        ? "text-base text-white"
                        : "text-xs text-white/40"
                    }
                  `}
                >
                  {lore.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LoreCarousel;
