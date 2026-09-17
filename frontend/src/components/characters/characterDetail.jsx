import React from 'react';
import BattlesuitSelector from './battlesuitSelector';

const Info = ({ label, value }) => (
  <div>
    <p className="text-[9px] uppercase tracking-[0.2em] text-white/35">
      {label}
    </p>

    <p className="mt-1 text-sm text-white/80">
      {value || '-'}
    </p>
  </div>
);

const CharacterDetail = ({
  character,
  getCharacterName,
  selectedBattlesuit,
  onBattlesuitChange,
  detailRef,
  onBack,
}) => {
  return (
    <div
      ref={detailRef}
      className="
        absolute
        left-[17%]
        top-[calc(50%+2.5rem)]
        z-30
        w-[26%]
        -translate-y-1/2
        pb-20
      "
    >
      <button
        onClick={onBack}
        className="
          mb-5
          text-[9px]
          uppercase
          tracking-[0.25em]
          text-white/40
          transition
          hover:text-white
        "
      >
        ← Back
      </button>

      <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-white/40">
        {character.faction || 'Unknown Faction'}
      </p>

      <h1
        className="
          text-4xl
          font-semibold
          uppercase
          tracking-tight
        "
      >
        {getCharacterName(character)}
      </h1>

      <div className="mt-7 grid grid-cols-2 gap-x-8 gap-y-5">
        <Info
          label="Birthday"
          value={character.birthday}
        />

        <Info
          label="Birthplace"
          value={character.birthplace}
        />

        <Info
          label="Height"
          value={
            character.height
              ? `${character.height} cm`
              : '-'
          }
        />

        <Info
          label="Weight"
          value={
            character.weight
              ? `${character.weight} kg`
              : '-'
          }
        />
      </div>

      <p className="mt-7 max-w-md text-xs leading-relaxed text-white/45">
        {character.description ||
          'No description available.'}
      </p>

      <div className="mt-8 pb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-white/55">
          Battlesuit
        </p>

        <BattlesuitSelector
          battlesuits={character.battlesuits}
          selectedBattlesuit={selectedBattlesuit}
          onBattlesuitChange={onBattlesuitChange}
        />
      </div>
    </div>
  );
};

export default CharacterDetail;