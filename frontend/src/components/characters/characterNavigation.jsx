import React from 'react';

const CharacterNavigation = ({
  onPrevious,
  onNext,
}) => {
  return (
    <div
      className="
        z-30
        flex
        w-full
        justify-end
        gap-2
      "
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

export default CharacterNavigation;