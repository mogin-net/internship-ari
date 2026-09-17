import React from 'react';
import characters from '../../data/characters';
import CharacterGallery from './charactersGallery';

const Characters = () => {
  return (
    <div className="min-h-screen bg-[#111]">

      <CharacterGallery
        characters={characters}
      />

    </div>
  );
};

export default Characters;