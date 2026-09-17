import React from 'react';

export const factionLogos = {
  All: '/assets/img/factions/ValkyrieIcon.webp',
  Schicksal: '/assets/img/factions/SchicksalIcon.webp',
  MOTH: '/assets/img/factions/MOTHIcon.webp',
  'Anti-Entropy': '/assets/img/factions/antientropy.png',
  'World Serpent': '/assets/img/factions/WorldSerpentIcon.png',
};

const CharacterFaction = ({
  factions,
  selectedFaction,
  onFactionChange,
  factionRef,
}) => {
  return (
    <div
      ref={factionRef}
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
        Characters
      </p>

      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/70">
        Factions
      </p>

      <div className="flex flex-col gap-2">
        {factions.map((faction) => {
          const isSelected = selectedFaction === faction;

          return (
            <button
              key={faction}
              type="button"
              onClick={() => onFactionChange(faction)}
              className={`
                group relative flex w-full items-center
                border-l px-3 py-2.5
                text-left
                transition-all duration-300

                ${isSelected
                  ? 'border-white bg-white/[0.06]'
                  : 'border-white/10 hover:border-white/40 hover:bg-white/[0.03]'
                }
              `}
            >
              {isSelected && (
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

              <div className="flex items-center gap-3">
                <div
                  className={`
                    flex h-9 w-9 shrink-0
                    items-center justify-center
                    rounded-full border
                    transition-all duration-300

                    ${isSelected
                      ? 'border-white/70 bg-white/10'
                      : 'border-white/15 bg-white/[0.02] group-hover:border-white/40'
                    }
                  `}
                >
                  <img
                    src={factionLogos[faction]}
                    alt={faction}
                    className={`
                      h-6 w-6 object-contain
                      transition-all duration-300

                      ${faction === 'MOTH'
                        ? 'brightness-200 saturate-150'
                        : ''
                      }
                      ${isSelected
                        ? 'opacity-100'
                        : 'opacity-40 grayscale group-hover:opacity-70'
                      }
                    `}
                  />
                </div>

                <span
                  className={`
                    text-[10px]
                    uppercase
                    tracking-[0.12em]
                    transition-all duration-300

                    ${isSelected
                      ? 'text-white'
                      : 'text-white/35 group-hover:text-white/70'
                    }
                  `}
                >
                  {faction}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterFaction;