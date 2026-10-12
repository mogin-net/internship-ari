import React from "react";

const MusicHead = ({ onBack }) => {
  return (
    <div className="relative mb-12 w-full">
      {/* BACK */}
      <button
        onClick={onBack}
        className="
            mb-5
            text-[12px]
            uppercase
            tracking-[0.25em]
            text-white/40
            transition
            hover:text-white
        "
      >
        ← Back
      </button>

      {/* VIDEO */}
      <div className="relative w-full overflow-hidden">
        <div className="aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/xREK6gZxYLQ?autoplay=1&mute=1&loop=1&playlist=xREK6gZxYLQ&controls=0"
            title="Honkai Impact 3rd Music"
            className="pointer-events-none h-full w-full border-0"
            allow="autoplay; encrypted-media"
          />
        </div>
      </div>

      {/* GRADIENT */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#101010] to-transparent" />

      {/* TITLE */}
      <div className="absolute bottom-8 left-8">
        <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
          Honkai Impact 3rd
        </p>

        <h1 className="mt-3 text-5xl font-semibold uppercase tracking-tight text-white">
          Music
        </h1>
      </div>
    </div>
  );
};

export default MusicHead;
