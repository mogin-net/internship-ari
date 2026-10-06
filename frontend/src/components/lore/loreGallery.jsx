import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";

import LoreCategory from "./loreCategory";
import LoreCarousel from "./loreCarousel";
import LoreDetail from "./loreDetail";
import LoreNavigation from "./loreNavigation";

const LoreGallery = ({ lore = [], selectedLore, onSelectLore, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [carouselOffset, setCarouselOffset] = useState(0);

  const galleryRef = useRef(null);
  const categoryRef = useRef(null);

  const carouselAnimatingRef = useRef(false);
  const carouselDirectionRef = useRef(null);

  /*
   * =========================================================
   * CATEGORIES
   * =========================================================
   */

  const categories = useMemo(() => {
    const values = lore.map((item) => item.category).filter(Boolean);

    return ["All", ...new Set(values)];
  }, [lore]);

  /*
   * =========================================================
   * FILTER
   * =========================================================
   */

  const filteredLore = useMemo(() => {
    if (selectedCategory === "All") {
      return lore;
    }

    return lore.filter((item) => item.category === selectedCategory);
  }, [lore, selectedCategory]);

  /*
   * =========================================================
   * ROTATE CAROUSEL
   * =========================================================
   */

  const rotatedLore = useMemo(() => {
    if (!filteredLore.length) return [];

    const offset = carouselOffset % filteredLore.length;

    return [...filteredLore.slice(offset), ...filteredLore.slice(0, offset)];
  }, [filteredLore, carouselOffset]);

  /*
   * =========================================================
   * CAROUSEL DATA
   * =========================================================
   */

  const carouselLore = useMemo(() => {
    if (!selectedLore) {
      return rotatedLore;
    }

    const selectedIndex = filteredLore.findIndex(
      (item) => item.id === selectedLore.id,
    );

    if (selectedIndex === -1) {
      return filteredLore;
    }

    const selected = filteredLore[selectedIndex];

    if (filteredLore.length === 1) {
      return [selected];
    }

    const next = filteredLore[(selectedIndex + 1) % filteredLore.length];

    return [selected, next];
  }, [filteredLore, selectedLore, rotatedLore]);

  /*
   * =========================================================
   * SELECT LORE
   * =========================================================
   */

  const handleLoreClick = (item) => {
    onSelectLore(item);

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
    if (!selectedLore) return;

    if (categoryRef.current) {
      gsap.fromTo(
        categoryRef.current,
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
  }, [selectedLore]);

  /*
   * =========================================================
   * NEXT LORE
   * =========================================================
   */

  const nextLore = () => {
    if (!filteredLore.length) return;

    const currentIndex = filteredLore.findIndex(
      (item) => item.id === selectedLore?.id,
    );

    const nextIndex =
      currentIndex === -1 ? 0 : (currentIndex + 1) % filteredLore.length;

    handleLoreClick(filteredLore[nextIndex]);
  };

  /*
   * =========================================================
   * PREVIOUS LORE
   * =========================================================
   */

  const previousLore = () => {
    if (!filteredLore.length) return;

    const currentIndex = filteredLore.findIndex(
      (item) => item.id === selectedLore?.id,
    );

    const previousIndex =
      currentIndex === -1
        ? 0
        : (currentIndex - 1 + filteredLore.length) % filteredLore.length;

    handleLoreClick(filteredLore[previousIndex]);
  };

  /*
   * =========================================================
   * CAROUSEL NAVIGATION
   * =========================================================
   */

  const nextCarousel = () => {
    if (
      !filteredLore.length ||
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
        setCarouselOffset((current) => (current + 1) % filteredLore.length);
      },
    });
  };

  const previousCarousel = () => {
    if (
      !filteredLore.length ||
      !galleryRef.current ||
      carouselAnimatingRef.current
    ) {
      return;
    }

    carouselAnimatingRef.current = true;
    carouselDirectionRef.current = "previous";

    const previousOffset =
      (carouselOffset - 1 + filteredLore.length) % filteredLore.length;

    setCarouselOffset(previousOffset);
  };

  useLayoutEffect(() => {
    if (selectedLore || !galleryRef.current || !carouselDirectionRef.current) {
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
  }, [carouselOffset, selectedLore]);

  /*
   * =========================================================
   * CATEGORY CHANGE
   * =========================================================
   */

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCarouselOffset(0);

    onBack();
  };

  /*
   * =========================================================
   * INITIAL GSAP
   * =========================================================
   */

  useEffect(() => {
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

      {/* CATEGORY */}

      <LoreCategory
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        categoryRef={categoryRef}
      />

      {/* DETAIL */}

      {selectedLore && <LoreDetail lore={selectedLore} onBack={onBack} />}

      {/* CAROUSEL + NAVIGATION */}

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
            selectedLore
              ? "right-[2%] top-[calc(50%+4rem)] w-[26%]"
              : "left-[calc(34%+10px)] right-[2%] top-[calc(50%+2.5rem)]"
          }
        `}
      >
        <LoreCarousel
          lore={carouselLore}
          selectedLore={selectedLore}
          onLoreClick={handleLoreClick}
          galleryRef={galleryRef}
        />

        <LoreNavigation
          onPrevious={selectedLore ? previousLore : previousCarousel}
          onNext={selectedLore ? nextLore : nextCarousel}
        />
      </div>
    </section>
  );
};

export default LoreGallery;
