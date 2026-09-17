import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import gsap from 'gsap';

import CharacterFaction from './characterFaction';
import CharacterDetail from './characterDetail';
import CharacterCarousel from './characterCarousel';
import BattlesuitDisplay from './battlesuitDisplay';
import BattlesuitSelector from './battlesuitSelector';
import CharacterNavigation from './characterNavigation';
import FactionBadge from './factionbadge';

const CharacterGallery = ({ characters = [] }) => {
  const [selectedFaction, setSelectedFaction] = useState('All');
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedBattlesuit, setSelectedBattlesuit] = useState(null);

  const galleryRef = useRef(null);
  const detailRef = useRef(null);
  const factionRef = useRef(null);
  const battlesuitRef = useRef(null);

  /*
   * =========================================================
   * CHARACTER NAME
   * =========================================================
   */

  const getCharacterName = (character) => {
    if (!character) return '';

    if (character.firstName === 'Mei') {
      return `${character.lastName || ''} ${character.firstName}`.trim();
    }

    return `${character.firstName || ''} ${character.lastName || ''}`.trim();
  };

  /*
   * =========================================================
   * FACTIONS
   * =========================================================
   */

  const factions = useMemo(() => {
    const values = characters
      .map((character) => character.faction)
      .filter(Boolean);

    return ['All', ...new Set(values)];
  }, [characters]);

  /*
   * =========================================================
   * FILTER
   * =========================================================
   */

  const filteredCharacters = useMemo(() => {
    if (selectedFaction === 'All') {
      return characters;
    }

    return characters.filter(
      (character) => character.faction === selectedFaction
    );
  }, [characters, selectedFaction]);

  /*
   * =========================================================
   * CAROUSEL DATA
   * =========================================================
   */

const carouselCharacters = useMemo(() => {
  if (!selectedCharacter) {
    return filteredCharacters;
  }

  const selectedIndex = filteredCharacters.findIndex(
    (character) =>
      character.id === selectedCharacter.id
  );

  if (selectedIndex === -1) {
    return filteredCharacters;
  }

  const selected =
    filteredCharacters[selectedIndex];

  // Kalau hanya ada 1 karakter,
  // jangan duplikasikan karakter tersebut
  if (filteredCharacters.length === 1) {
    return [selected];
  }

  const next =
    filteredCharacters[
      (selectedIndex + 1) %
        filteredCharacters.length
    ];

  return [selected, next];
}, [
  filteredCharacters,
  selectedCharacter,
]);

  /*
   * =========================================================
   * SELECT CHARACTER
   * =========================================================
   */

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);

    setSelectedBattlesuit(
      character.battlesuits?.[0] || null
    );

    if (galleryRef.current) {
      gsap.to(galleryRef.current, {
        duration: 0.6,
        ease: 'power3.out',
      });
    }

    if (detailRef.current) {
      gsap.fromTo(
        detailRef.current,
        {
          x: -70,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
        }
      );
    }

    if (factionRef.current) {
      gsap.fromTo(
        factionRef.current,
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: 'power2.out',
        }
      );
    }

    if (battlesuitRef.current) {
      gsap.fromTo(
        battlesuitRef.current,
        {
          opacity: 0,
          x: 70,
          scale: 0.85,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power3.out',
        }
      );
    }
  };

  /*
   * =========================================================
   * NEXT CHARACTER
   * =========================================================
   */

  const nextCharacter = () => {
    if (!filteredCharacters.length) return;

    const currentIndex = filteredCharacters.findIndex(
      (character) =>
        character.id === selectedCharacter?.id
    );

    const nextIndex =
      currentIndex === -1
        ? 0
        : (currentIndex + 1) % filteredCharacters.length;

    handleCharacterClick(
      filteredCharacters[nextIndex]
    );
  };

  /*
   * =========================================================
   * PREVIOUS CHARACTER
   * =========================================================
   */

  const previousCharacter = () => {
    if (!filteredCharacters.length) return;

    const currentIndex = filteredCharacters.findIndex(
      (character) =>
        character.id === selectedCharacter?.id
    );

    const previousIndex =
      currentIndex === -1
        ? 0
        : (currentIndex - 1 + filteredCharacters.length) %
          filteredCharacters.length;

    handleCharacterClick(
      filteredCharacters[previousIndex]
    );
  };

  /*
   * =========================================================
   * FACTION CHANGE
   * =========================================================
   */

  const handleFactionChange = (faction) => {
    setSelectedFaction(faction);
    setSelectedCharacter(null);
    setSelectedBattlesuit(null);
  };

  /*
   * =========================================================
   * BATTLESUIT CHANGE
   * =========================================================
   */

  const handleBattlesuitChange = (battlesuit) => {
    setSelectedBattlesuit(battlesuit);

    if (battlesuitRef.current) {
      gsap.fromTo(
        battlesuitRef.current,
        {
          opacity: 0,
          scale: 0.96,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.45,
          ease: 'power2.out',
        }
      );
    }
  };

  /*
   * =========================================================
   * INITIAL GSAP
   * =========================================================
   */

  useEffect(() => {
    if (detailRef.current) {
      gsap.set(detailRef.current, {
        x: -70,
        opacity: 0,
      });
    }

    if (battlesuitRef.current) {
      gsap.set(battlesuitRef.current, {
        x: 70,
        opacity: 0,
        scale: 0.85,
      });
    }

    if (galleryRef.current) {
      gsap.set(galleryRef.current, {
        x: 0,
      });
    }
  }, []);

  /*
   * =========================================================
   * RENDER
   * =========================================================
   */

  return (
    <section
      className="
        relative
            min-h-[calc(100vh+5rem)]
        w-full
        overflow-x-hidden
        bg-[#101010]
        text-white
    "
    >

      {/* BACKGROUND */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.08),transparent_35%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[linear-gradient(to_right,rgba(0,0,0,0.4),transparent_45%,rgba(0,0,0,0.6))]
        "
      />

      {/* FACTION */}

      <CharacterFaction
        factions={factions}
        selectedFaction={selectedFaction}
        onFactionChange={handleFactionChange}
        factionRef={factionRef}
      />

      {/* DETAIL */}

      {selectedCharacter && (
        <CharacterDetail
          character={selectedCharacter}
          getCharacterName={getCharacterName}
          selectedBattlesuit={selectedBattlesuit}
          onBattlesuitChange={handleBattlesuitChange}
          detailRef={detailRef}
          onBack={() => {
            setSelectedCharacter(null);
            setSelectedBattlesuit(null);
          }}
        />
      )}

      {/* FACTION BADGE */}

      {!selectedCharacter && (
        <FactionBadge faction={selectedFaction} />
      )}

      {/* BATTLESUIT */}

      <BattlesuitDisplay
        battlesuit={selectedBattlesuit}
        battlesuitRef={battlesuitRef}
      />

      {/* CHARACTER CAROUSEL + NAVIGATION */}

      <div
        className={`
          absolute
          z-20
          flex
          -translate-y-1/2
          flex-col
          gap-4
          transition-all
          duration-500

          ${
            selectedCharacter
                ? 'right-[2%] top-[calc(50%+4rem)] w-[26%]'
                : 'left-[calc(34%+10px)] right-[2%] top-[calc(50%+2.5rem)]'
          }
        `}
      >
        <CharacterCarousel
          characters={carouselCharacters}
          selectedCharacter={selectedCharacter}
          getCharacterName={getCharacterName}
          onCharacterClick={handleCharacterClick}
          galleryRef={galleryRef}
        />

        {selectedCharacter && (
          <CharacterNavigation
            onPrevious={previousCharacter}
            onNext={nextCharacter}
          />
        )}
      </div>

    </section>
  );
};

export default CharacterGallery;