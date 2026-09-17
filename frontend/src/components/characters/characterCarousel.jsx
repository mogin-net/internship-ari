import React from 'react';

const CharacterCarousel = ({
  characters,
  selectedCharacter,
  getCharacterName,
  onCharacterClick,
  galleryRef,
}) => {
  return (
    <div
      ref={galleryRef}
      className="
        flex
        h-[600px]
        w-full
        gap-3
        overflow-hidden
      "
    >
      {characters.map((character, index) => {
        const isSelected =
          selectedCharacter?.id === character.id;

        const isNext =
          selectedCharacter && index === 1;

        return (
          <div
            key={character.id}
            onClick={() =>
              onCharacterClick(character)
            }
            className={`
              group
              relative
              h-full
              shrink-0
              cursor-pointer
              overflow-hidden
              transition-all
              duration-500

              ${
                selectedCharacter
                  ? isSelected
                    ? 'w-[220px] min-w-[220px] scale-[1.005]'
                    : 'w-[90px] min-w-[90px]'
                  : 'w-[150px] min-w-[150px]'
              }

              ${
                isNext
                  ? 'after:absolute after:inset-y-0 after:right-0 after:w-full after:bg-gradient-to-r after:from-transparent after:via-black/40 after:to-black after:backdrop-blur-[2px]'
                  : ''
              }
            `}
          >
            <img
              src={character.image}
              alt={getCharacterName(character)}
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
                    ? 'grayscale-0 brightness-100'
                    : 'grayscale brightness-[0.4]'
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
                      ? 'text-base text-white'
                      : 'text-xs text-white/40'
                  }
                `}
              >
                {getCharacterName(character)}
                
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CharacterCarousel;