import React from 'react';

const BattlesuitSelector = ({
  battlesuits = [],
  selectedBattlesuit,
  onBattlesuitChange,
}) => {
  return (
    <div
      className="
        absolute
        bottom-[10%]
        left-[17%]
        z-30
        grid
        w-74
        grid-cols-5
        gap-3
      "
    >
      {battlesuits
        .map((battlesuit) => {
          const isSelected =
            selectedBattlesuit?.id === battlesuit.id;

          return (
            <button
              key={battlesuit.id}
              onClick={() =>
                onBattlesuitChange(battlesuit)
              }
              title={battlesuit.name}
              className={`
                relative
                h-14
                w-14
                overflow-hidden
                border
                transition-all
                duration-300

                ${
                  isSelected
                    ? 'scale-110 border-white'
                    : 'border-white/20 opacity-60 hover:scale-105 hover:border-white/60 hover:opacity-100'
                }
              `}
            >
              <img
                src={battlesuit.icon}
                alt={battlesuit.name}
                draggable="false"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />
            </button>
          );
        })}
    </div>
  );
};

export default BattlesuitSelector;