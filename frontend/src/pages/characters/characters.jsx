import React, { useEffect, useRef, useState } from "react";
import CharacterGallery from "../../components/characters/charactersGallery";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedBattlesuit, setSelectedBattlesuit] = useState(null);

  const detailRef = useRef(null);
  const battlesuitRef = useRef(null);

  /*
   * =========================================================
   * GET ALL CHARACTERS
   * =========================================================
   */

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil characters");
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

  /*
   * =========================================================
   * GET CHARACTER DETAIL
   * =========================================================
   */

  const handleCharacterSelect = async (character) => {
    try {
      const response = await fetch(
        `http://localhost:3000/characters/${character.id}`,
      );

      if (!response.ok) {
        throw new Error("Gagal mengambil detail character");
      }

      const result = await response.json();

      setSelectedCharacter(result.data);

      setSelectedBattlesuit(result.data.battlesuits?.[0] || null);
    } catch (error) {
      console.error(error);
    }
  };

  /*
   * =========================================================
   * BACK
   * =========================================================
   */

  const handleBack = () => {
    setSelectedCharacter(null);
    setSelectedBattlesuit(null);
  };

  /*
   * =========================================================
   * BATTLESUIT
   * =========================================================
   */

  const handleBattlesuitChange = (battlesuit) => {
    setSelectedBattlesuit(battlesuit);
  };

  return (
    <CharacterGallery
      characters={characters}
      selectedCharacter={selectedCharacter}
      selectedBattlesuit={selectedBattlesuit}
      onSelectCharacter={handleCharacterSelect}
      onBack={handleBack}
      onBattlesuitChange={handleBattlesuitChange}
      detailRef={detailRef}
      battlesuitRef={battlesuitRef}
    />
  );
};

export default Characters;
