import React, {
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react';

import { gsap } from 'gsap';

const CharacterGallery = ({ characters }) => {

  const [selectedFaction, setSelectedFaction] = useState('All');

  const [selectedCharacter, setSelectedCharacter] =
    useState(null);

  const [selectedBattlesuit, setSelectedBattlesuit] =
    useState(null);

  const galleryRef = useRef(null);

  const factionRef = useRef(null);

  const detailRef = useRef(null);

  const battlesuitRef = useRef(null);

  const dragStartX = useRef(0);

  const dragging = useRef(false);


  /*
  ============================================
  FACTION LIST
  ============================================
  */

  const factions = useMemo(() => {

    return [
      'All',
      ...new Set(
        characters.map(character => character.faction)
      )
    ];

  }, [characters]);


  /*
  ============================================
  FILTER CHARACTER
  ============================================
  */

  const filteredCharacters = useMemo(() => {

    if (selectedFaction === 'All') {

      return characters;

    }

    return characters.filter(
      character =>
        character.faction === selectedFaction
    );

  }, [characters, selectedFaction]);


  /*
  ============================================
  CHARACTER CLICK
  ============================================
  */

  const handleCharacterClick = character => {

    setSelectedCharacter(character);

    /*
    Battlesuit pertama otomatis dipilih
    */

    setSelectedBattlesuit(
      character.battlesuits?.[0] || null
    );


    /*
    Gallery bergerak KE KANAN
    */

    gsap.to(galleryRef.current, {

      x: '18%',

      duration: 0.8,

      ease: 'power3.out'

    });


    /*
    Faction menghilang
    */

    gsap.to(factionRef.current, {

      opacity: 0,

      x: -80,

      duration: 0.45,

      ease: 'power2.inOut'

    });


    /*
    Detail muncul
    */

    gsap.fromTo(

      detailRef.current,

      {
        opacity: 0,
        x: -70
      },

      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        delay: 0.25,
        ease: 'power3.out'
      }

    );


    /*
    Battlesuit muncul
    */

    gsap.fromTo(

      battlesuitRef.current,

      {
        opacity: 0,
        x: 70,
        scale: 0.85
      },

      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 0.8,
        delay: 0.25,
        ease: 'power3.out'
      }

    );

  };


  /*
  ============================================
  BACK
  ============================================
  */

  const handleBack = () => {

    /*
    Hilangkan detail
    */

    gsap.to(detailRef.current, {

      opacity: 0,

      x: -60,

      duration: 0.4,

      ease: 'power2.inOut'

    });


    /*
    Hilangkan battlesuit
    */

    gsap.to(battlesuitRef.current, {

      opacity: 0,

      x: 60,

      scale: 0.9,

      duration: 0.4,

      ease: 'power2.inOut'

    });


    /*
    Gallery kembali
    */

    gsap.to(galleryRef.current, {

      x: '0%',

      duration: 0.8,

      ease: 'power3.out'

    });


    /*
    Faction muncul kembali
    */

    gsap.to(factionRef.current, {

      opacity: 1,

      x: 0,

      duration: 0.6,

      delay: 0.25,

      ease: 'power3.out'

    });


    setTimeout(() => {

      setSelectedCharacter(null);

      setSelectedBattlesuit(null);

    }, 350);

  };


  /*
  ============================================
  BATTLE SUIT CLICK
  ============================================
  */

  const handleBattlesuitClick = battlesuit => {

    if (
      selectedBattlesuit?.id === battlesuit.id
    ) {

      return;

    }


    /*
    PNG lama keluar
    */

    gsap.to(battlesuitRef.current, {

      opacity: 0,

      x: 40,

      duration: 0.25,

      ease: 'power2.in'

    });


    setTimeout(() => {

      setSelectedBattlesuit(battlesuit);


      /*
      PNG baru masuk
      */

      gsap.fromTo(

        battlesuitRef.current,

        {
          opacity: 0,
          x: -40,
          scale: 0.9
        },

        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          ease: 'power3.out'
        }

      );

    }, 250);

  };


  /*
  ============================================
  NEXT CHARACTER
  ============================================
  */

  const nextCharacter = () => {

    if (!selectedCharacter) return;

    const currentIndex =
      filteredCharacters.findIndex(
        character =>
          character.id === selectedCharacter.id
      );

    const nextIndex =
      (currentIndex + 1) %
      filteredCharacters.length;

    handleCharacterClick(
      filteredCharacters[nextIndex]
    );

  };


  /*
  ============================================
  PREVIOUS CHARACTER
  ============================================
  */

  const previousCharacter = () => {

    if (!selectedCharacter) return;

    const currentIndex =
      filteredCharacters.findIndex(
        character =>
          character.id === selectedCharacter.id
      );

    const previousIndex =
      (currentIndex - 1 +
        filteredCharacters.length) %
      filteredCharacters.length;

    handleCharacterClick(
      filteredCharacters[previousIndex]
    );

  };


  /*
  ============================================
  SWIPE / DRAG START
  ============================================
  */

  const handlePointerDown = e => {

    dragStartX.current = e.clientX;

    dragging.current = true;

  };


  /*
  ============================================
  SWIPE / DRAG END
  ============================================
  */

  const handlePointerUp = e => {

    if (!dragging.current) return;

    dragging.current = false;

    const difference =
      e.clientX - dragStartX.current;


    /*
    Geser ke kiri
    */

    if (difference < -70) {

      nextCharacter();

    }


    /*
    Geser ke kanan
    */

    if (difference > 70) {

      previousCharacter();

    }

  };


  /*
  ============================================
  FACTION CLICK
  ============================================
  */

  const handleFactionClick = faction => {

    setSelectedFaction(faction);

    /*
    Kalau sedang melihat detail,
    kembalikan dahulu ke mode faction
    */

    if (selectedCharacter) {

      handleBack();

    }

  };


  /*
  ============================================
  INITIAL POSITION
  ============================================
  */

  useEffect(() => {

    gsap.set(galleryRef.current, {
      x: '0%'
    });

    gsap.set(detailRef.current, {
      opacity: 0,
      x: -70
    });

    gsap.set(battlesuitRef.current, {
      opacity: 0,
      x: 70,
      scale: 0.85
    });

  }, []);


  return (

    <section
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#101010]
        text-white
      "
    >

      {/* ==================================================
          BACKGROUND
      ================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-30
        "
      >

        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_55%)]
          "
        />

      </div>


      {/* ==================================================
          FACTION / DETAIL AREA
      ================================================== */}

      <div
        className="
          absolute
          left-[5%]
          top-1/2
          z-20
          w-[22%]
          -translate-y-1/2
        "
      >

        {/* =================================================
            FACTION
        ================================================= */}

        <div
          ref={factionRef}
          className="
            flex
            flex-col
            items-start
          "
        >

          <div
            className="
              mb-8
              h-[1px]
              w-[230px]
              bg-white/40
            "
          />

          <div
            className="
              mb-5
              flex
              h-24
              w-24
              items-center
              justify-center
            "
          >

            {selectedFaction !== 'All' &&
            characters.find(
              character =>
                character.faction === selectedFaction
            )?.factionLogo ? (

              <img
                src={
                  characters.find(
                    character =>
                      character.faction ===
                      selectedFaction
                  )?.factionLogo
                }
                alt=""
                className="
                  h-full
                  w-full
                  object-contain
                  opacity-70
                "
              />

            ) : (

              <div
                className="
                  h-16
                  w-16
                  rotate-45
                  border
                  border-white/30
                "
              />

            )}

          </div>


          <h1
            className="
              text-3xl
              font-semibold
              uppercase
              tracking-[0.15em]
            "
          >
            {selectedFaction}
          </h1>


          <p
            className="
              mt-3
              max-w-xs
              text-xs
              leading-6
              text-white/40
            "
          >
            Select a faction to explore
            its characters.
          </p>


          {/* FACTION MENU */}

          <div
            className="
              mt-10
              flex
              flex-col
              gap-4
            "
          >

            {factions.map(faction => (

              <button
                key={faction}
                onClick={() =>
                  handleFactionClick(faction)
                }
                className="
                  group
                  flex
                  items-center
                  gap-3
                  text-left
                "
              >

                <span
                  className={`
                    h-2
                    w-2
                    rotate-45
                    border
                    transition-all
                    duration-300

                    ${
                      selectedFaction === faction
                        ? 'border-white bg-white'
                        : 'border-white/30'
                    }
                  `}
                />

                <span
                  className={`
                    text-xs
                    uppercase
                    tracking-[0.18em]
                    transition-all
                    duration-300

                    ${
                      selectedFaction === faction
                        ? 'text-white'
                        : 'text-white/30 group-hover:text-white'
                    }
                  `}
                >
                  {faction}
                </span>

              </button>

            ))}

          </div>

        </div>


        {/* =================================================
            CHARACTER DETAIL
        ================================================= */}

        <div
          ref={detailRef}
          className="
            absolute
            left-0
            top-0
            w-full
          "
        >

          {selectedCharacter && (

            <>

              <button
                onClick={handleBack}
                className="
                  mb-8
                  flex
                  items-center
                  gap-3
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-white/50
                  transition-colors
                  hover:text-white
                "
              >

                <span className="text-xl">
                  ←
                </span>

                Back

              </button>


              <p
                className="
                  mb-2
                  text-[10px]
                  uppercase
                  tracking-[0.3em]
                  text-white/40
                "
              >
                {selectedCharacter.faction}
              </p>


              <h1
                className="
                  mb-8
                  text-4xl
                  font-semibold
                  uppercase
                  leading-tight
                "
              >
                {selectedCharacter.name}
              </h1>


              <div
                className="
                  mb-7
                  h-[1px]
                  w-full
                  bg-white/20
                "
              />


              {/* INFORMATION */}

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-5
                  gap-y-5
                "
              >

                <Info
                  label="Birthday"
                  value={selectedCharacter.birthday}
                />

                <Info
                  label="Faction"
                  value={selectedCharacter.faction}
                />

                <Info
                  label="Height"
                  value={selectedCharacter.height}
                />

                <Info
                  label="Weight"
                  value={selectedCharacter.weight}
                />

              </div>


              {/* DESCRIPTION */}

              <div className="mt-8">

                <p
                  className="
                    mb-2
                    text-[10px]
                    uppercase
                    tracking-[0.25em]
                    text-white/40
                  "
                >
                  Description
                </p>

                <p
                  className="
                    text-sm
                    leading-7
                    text-white/55
                  "
                >
                  {selectedCharacter.description}
                </p>

              </div>

            </>

          )}

        </div>

      </div>


      {/* ==================================================
          BATTLE SUIT VISUAL
      ================================================== */}

      <div
        ref={battlesuitRef}
        className="
          pointer-events-none
          absolute
          left-[31%]
          top-[8%]
          z-10
          flex
          h-[65%]
          w-[24%]
          items-center
          justify-center
        "
      >

        {selectedBattlesuit && (

          <img
            src={selectedBattlesuit.image}
            alt={selectedBattlesuit.name}
            draggable="false"
            className="
              h-full
              w-full
              select-none
              object-contain
              drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]
            "
          />

        )}

      </div>


      {/* ==================================================
          CHARACTER GALLERY
      ================================================== */}

      <div
        ref={galleryRef}
        className="
          absolute
          left-[48%]
          top-1/2
          z-20
          flex
          h-[560px]
          w-[47%]
          -translate-y-1/2
          gap-3
          touch-pan-y
          select-none
        "
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
      >

        {filteredCharacters.map(character => {

          const isSelected =
            selectedCharacter?.id ===
            character.id;

          return (

            <article
              key={character.id}
              onClick={() =>
                handleCharacterClick(character)
              }
              className={`
                group
                relative
                h-full
                min-w-[100px]
                flex-1
                cursor-pointer
                overflow-hidden
                border
                border-white/20
                bg-[#090909]
                transition-all
                duration-700
                ${
                  isSelected
                    ? 'flex-[1.8]'
                    : 'flex-1 hover:flex-[1.35]'
                }
              `}
            >

              {/* IMAGE */}

              <img
                src={character.image}
                alt={character.name}
                draggable="false"
                className={`
                absolute
                inset-0
                h-full
                w-full
                object-cover
                transition-all
                duration-700

                ${
                    selectedCharacter
                    ? isSelected
                        ? 'grayscale-0 brightness-100'
                        : 'grayscale brightness-[0.55] group-hover:brightness-75'
                    : 'grayscale-0 brightness-100'
                }

                group-hover:scale-105
                `}
              />


              {/* OVERLAY */}

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                  opacity-80
                  transition-opacity
                  duration-500
                  group-hover:opacity-90
                "
              />


              {/* CHARACTER NAME */}

              <div
                className="
                  absolute
                  bottom-5
                  left-4
                  right-4
                  z-10
                "
              >

                <div
                  className="
                    mb-2
                    h-7
                    w-[2px]
                    bg-white
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:opacity-100
                  "
                />

                <h2
                  className="
                    text-sm
                    font-semibold
                    tracking-wide
                    opacity-0
                    transition-all
                    duration-500
                    group-hover:translate-x-1
                    group-hover:opacity-100
                  "
                >
                  {character.name}
                </h2>

              </div>

            </article>

          );

        })}

      </div>


      {/* ==================================================
          BATTLE SUIT ICONS
      ================================================== */}

      {selectedCharacter && (

        <div
          className="
            absolute
            bottom-[7%]
            left-[34%]
            z-30
            flex
            items-center
            gap-3
          "
        >

          {selectedCharacter.battlesuits.map(
            battlesuit => {

              const active =
                selectedBattlesuit?.id ===
                battlesuit.id;

              return (

                <button
                  key={battlesuit.id}
                  onClick={() =>
                    handleBattlesuitClick(
                      battlesuit
                    )
                  }
                  title={battlesuit.name}
                  className={`
                    relative
                    h-14
                    w-14
                    overflow-hidden
                    border
                    bg-black/60
                    transition-all
                    duration-300

                    ${
                      active
                        ? 'scale-110 border-white'
                        : 'border-white/20 opacity-50 hover:scale-105 hover:opacity-100'
                    }
                  `}
                >

                  <img
                    src={battlesuit.icon}
                    alt={battlesuit.name}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {active && (

                    <span
                      className="
                        absolute
                        bottom-0
                        left-0
                        h-[2px]
                        w-full
                        bg-white
                      "
                    />

                  )}

                </button>

              );

            }
          )}

        </div>

      )}


      {/* ==================================================
          PREVIOUS / NEXT
      ================================================== */}

      {selectedCharacter && (

        <div
          className="
            absolute
            bottom-[7%]
            right-[5%]
            z-30
            flex
            gap-2
          "
        >

          <button
            onClick={previousCharacter}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/30
              text-white/60
              transition-all
              hover:border-white
              hover:text-white
            "
          >
            ←
          </button>

          <button
            onClick={nextCharacter}
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              border
              border-white/30
              text-white/60
              transition-all
              hover:border-white
              hover:text-white
            "
          >
            →
          </button>

        </div>

      )}

    </section>

  );

};


/*
==================================================
INFO COMPONENT
==================================================
*/

const Info = ({ label, value }) => {

  return (

    <div>

      <p
        className="
          text-[9px]
          uppercase
          tracking-[0.2em]
          text-white/35
        "
      >
        {label}
      </p>

      <p
        className="
          mt-1
          text-sm
          text-white/80
        "
      >
        {value}
      </p>

    </div>

  );

};


export default CharacterGallery;