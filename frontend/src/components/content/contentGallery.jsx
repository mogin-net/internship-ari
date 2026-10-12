import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import ContentFeatured from "./contentFeatured";
import ContentCard from "./contentCard";

const ContentGallery = ({ categories = [] }) => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(
    categories[0] || null,
  );

  const featuredRef = useRef(null);

  const handleCategoryHover = (category) => {
    if (!category || category.id === selectedCategory?.id) {
      return;
    }

    setSelectedCategory(category);

    if (featuredRef.current) {
      gsap.fromTo(
        featuredRef.current,
        {
          opacity: 0.5,
          scale: 0.98,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        },
      );
    }
  };

  const handleCategoryClick = (category) => {
    if (category?.path) {
      navigate(category.path);
    }
  };

  return (
    <section className="min-h-[calc(100vh+5rem)] bg-[#101010] text-white">
      <div className="mx-auto flex min-h-screen w-[90%] max-w-[1500px] flex-col justify-center py-24">
        {/* HEADER */}
        <div className="mb-10">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
            Honkai Impact 3rd
          </p>

          <h1 className="mt-3 text-5xl font-semibold uppercase tracking-tight">
            Content
          </h1>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-[minmax(0,1.8fr)_minmax(280px,0.7fr)] gap-4">
          {/* FEATURED */}
          <ContentFeatured
            category={selectedCategory}
            featuredRef={featuredRef}
          />

          {/* CARDS */}
          <div className="grid grid-rows-4 gap-3">
            {categories.map((category) => (
              <ContentCard
                key={category.id}
                category={category}
                isActive={selectedCategory?.id === category.id}
                onHover={handleCategoryHover}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGallery;
