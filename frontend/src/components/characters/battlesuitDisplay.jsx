import React from 'react';

const BattlesuitDisplay = ({
  battlesuit,
  battlesuitRef,
}) => {
  return (
    <div
      ref={battlesuitRef}
      className="
        pointer-events-none
            absolute
            left-[calc(45%+10px)]
            top-[calc(50%-18rem)]
        z-10
        flex
        h-[72%]
        w-[26%]
        flex-col
        items-center
        justify-center
      "
    >
      {battlesuit && (
        <>
          <img
            src={battlesuit.image}
            alt={battlesuit.name}
            draggable="false"
            className="
              h-[90%]
              w-full
              select-none
              object-contain
              drop-shadow-[0_25px_40px_rgba(0,0,0,0.85)]
            "
          />

          <p
            className="
              mt-2
              mb-2
              text-sm
              uppercase
              tracking-[0.18em]
              text-white/80
            "
          >
            {battlesuit.name}
          </p>
        </>
      )}
    </div>
  );
};

export default BattlesuitDisplay;