import React from 'react';
import { factionLogos } from './characterFaction';

const FactionBadge = ({ faction }) => {
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
      <img
        src={factionLogos[faction]}
        alt={faction}
        draggable="false"
        className="
          h-24
          w-24
          select-none
          object-contain
          opacity-70
        "
      />

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
        {faction}
      </p>
    </div>
  );
};

export default FactionBadge;