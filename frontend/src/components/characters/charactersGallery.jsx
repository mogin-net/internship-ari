import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

import CharacterFaction from "./characterFaction";
import CharacterDetail from "./characterDetail";
import CharacterCarousel from "./characterCarousel";
import BattlesuitDisplay from "./battlesuitDisplay";
import CharacterNavigation from "./characterNavigation";
import FactionBadge from "./factionBadge";

const CharacterGallery = ({
  characters = [],
  selectedCharacter,
  selectedBattlesuit,
  onSelectCharacter,
  onBack,
  onBattlesuitChange,
  detailRef,
  battlesuitRef,
}) => {
  const [selectedFaction, setSelectedFaction] = useState("All");
  const [carouselOffset, setCarouselOffset] = useState(0);

  const galleryRef = useRef(null);
  const factionRef = useRef(null);

  const carouselAnimatingRef = useRef(false);
  const carouselDirectionRef = useRef(null);

  /*
   * =========================================================
   * CHARACTER NAME
   * =========================================================
   */

  const getCharacterName = (character) => {
    if (!character) return "";

    if (character.firstName === "Mei" || character.firstName === "Himeko") {
      return `${character.lastName || ""} ${character.firstName}`.trim();
    }

    return `${character.firstName || ""} ${character.lastName || ""}`.trim();
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

    return ["All", ...new Set(values)];
  }, [characters]);

  /*
   * =========================================================
   * FILTER
   * =========================================================
   */

  const filteredCharacters = useMemo(() => {
    if (selectedFaction === "All") {
      return characters;
    }

    return characters.filter(
      (character) => character.faction === selectedFaction,
    );
  }, [characters, selectedFaction]);

  /*
   * =========================================================
   * ROTATE CAROUSEL EFFECT
   * =========================================================
   */

  const rotatedCharacters = useMemo(() => {
    if (!filteredCharacters.length) return [];

    const offset = carouselOffset % filteredCharacters.length;

    return [
      ...filteredCharacters.slice(offset),
      ...filteredCharacters.slice(0, offset),
    ];
  }, [filteredCharacters, carouselOffset]);

  /*
   * =========================================================
   * CAROUSEL DATA
   * =========================================================
   */

  const carouselCharacters = useMemo(() => {
    if (!selectedCharacter) {
      return rotatedCharacters;
    }

    const selectedIndex = filteredCharacters.findIndex(
      (character) => character.id === selectedCharacter.id,
    );

    if (selectedIndex === -1) {
      return filteredCharacters;
    }

    const selected = filteredCharacters[selectedIndex];

    if (filteredCharacters.length === 1) {
      return [selected];
    }

    const next =
      filteredCharacters[(selectedIndex + 1) % filteredCharacters.length];

    return [selected, next];
  }, [filteredCharacters, selectedCharacter, rotatedCharacters]);

  /*
   * =========================================================
   * SELECT CHARACTER
   * =========================================================
   */

  const handleCharacterClick = (character) => {
    // Sekarang detail character diambil oleh Characters.jsx
    onSelectCharacter(character);

    // Tetap mempertahankan animasi gallery lama
    if (galleryRef.current) {
      gsap.to(galleryRef.current, {
        duration: 0.6,
        ease: "power3.out",
      });
    }
  };

  /*
   * =========================================================
   * DETAIL ANIMATION
   * =========================================================
   */

  useEffect(() => {
    if (!selectedCharacter) return;

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
          ease: "power3.out",
        },
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
          ease: "power2.out",
        },
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
          ease: "power3.out",
        },
      );
    }
  }, [selectedCharacter, detailRef, battlesuitRef]);

  /*
   * =========================================================
   * NEXT CHARACTER
   * =========================================================
   */

  const nextCharacter = () => {
    if (!filteredCharacters.length) return;

    const currentIndex = filteredCharacters.findIndex(
      (character) => character.id === selectedCharacter?.id,
    );

    const nextIndex =
      currentIndex === -1 ? 0 : (currentIndex + 1) % filteredCharacters.length;

    handleCharacterClick(filteredCharacters[nextIndex]);
  };

  /*
   * =========================================================
   * PREVIOUS CHARACTER
   * =========================================================
   */

  const previousCharacter = () => {
    if (!filteredCharacters.length) return;

    const currentIndex = filteredCharacters.findIndex(
      (character) => character.id === selectedCharacter?.id,
    );

    const previousIndex =
      currentIndex === -1
        ? 0
        : (currentIndex - 1 + filteredCharacters.length) %
          filteredCharacters.length;

    handleCharacterClick(filteredCharacters[previousIndex]);
  };

  /*
   * =========================================================
   * CAROUSEL NAVIGATION - ALL CHARACTERS
   * =========================================================
   */

  const nextCarousel = () => {
    if (
      !filteredCharacters.length ||
      !galleryRef.current ||
      carouselAnimatingRef.current
    ) {
      return;
    }

    carouselAnimatingRef.current = true;
    carouselDirectionRef.current = "next";

    gsap.to(galleryRef.current, {
      x: -162,
      duration: 0.45,
      ease: "power3.inOut",

      onComplete: () => {
        setCarouselOffset(
          (current) => (current + 1) % filteredCharacters.length,
        );
      },
    });
  };

  const previousCarousel = () => {
    if (
      !filteredCharacters.length ||
      !galleryRef.current ||
      carouselAnimatingRef.current
    ) {
      return;
    }

    carouselAnimatingRef.current = true;
    carouselDirectionRef.current = "previous";

    const previousOffset =
      (carouselOffset - 1 + filteredCharacters.length) %
      filteredCharacters.length;

    setCarouselOffset(previousOffset);
  };

  useLayoutEffect(() => {
    if (
      selectedCharacter ||
      !galleryRef.current ||
      !carouselDirectionRef.current
    ) {
      return;
    }

    const direction = carouselDirectionRef.current;

    if (direction === "previous") {
      gsap.set(galleryRef.current, {
        x: -162,
      });

      gsap.to(galleryRef.current, {
        x: 0,
        duration: 0.45,
        ease: "power3.out",

        onComplete: () => {
          carouselDirectionRef.current = null;
          carouselAnimatingRef.current = false;
        },
      });
    }

    if (direction === "next") {
      gsap.set(galleryRef.current, {
        x: 0,
      });

      carouselDirectionRef.current = null;
      carouselAnimatingRef.current = false;
    }
  }, [carouselOffset, selectedCharacter]);

  /*
   * =========================================================
   * FACTION CHANGE
   * =========================================================
   */

  const handleFactionChange = (faction) => {
    setSelectedFaction(faction);

    // State character sekarang dimiliki Characters.jsx
    onBack();
  };

  /*
   * =========================================================
   * BATTLESUIT CHANGE
   * =========================================================
   */

  const handleBattlesuitChange = (battlesuit) => {
    // State battlesuit sekarang dimiliki Characters.jsx
    onBattlesuitChange(battlesuit);

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
          ease: "power2.out",
        },
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
  }, [detailRef, battlesuitRef]);

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
          onBack={onBack}
        />
      )}

      {/* FACTION BADGE */}

      {!selectedCharacter && <FactionBadge faction={selectedFaction} />}

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
              ? "right-[2%] top-[calc(50%+4rem)] w-[26%]"
              : "left-[calc(34%+10px)] right-[2%] top-[calc(50%+2.5rem)]"
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

        {selectedCharacter ? (
          <CharacterNavigation
            onPrevious={previousCharacter}
            onNext={nextCharacter}
          />
        ) : (
          <CharacterNavigation
            onPrevious={previousCarousel}
            onNext={nextCarousel}
          />
        )}
      </div>
    </section>
  );
};

export default CharacterGallery;
