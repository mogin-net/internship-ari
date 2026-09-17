import {React, useEffect, useState} from 'react';
import characters from '../../data/characters';
import CharacterGallery from '../../components/characters/charactersGallery';

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch characters");
        }

        return response.json();
      })
      .then((result) => {
        setCharacters(result.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <CharacterGallery characters={characters} />
  );
};

export default Characters;