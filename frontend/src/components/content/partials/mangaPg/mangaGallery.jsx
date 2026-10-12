import React from "react";
import { useNavigate } from "react-router-dom";

import MangaHead from "./mangaHead";
import MangaCard from "./mangaCard";

const MangaGallery = ({ manga = [] }) => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh+5rem)] bg-[#101010] text-white">
      <div className="mx-auto w-[90%] max-w-[1500px] py-24">
        <MangaHead onBack={() => navigate("/contents")} />

        <div className="mb-8">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
            Content
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight">
            Manga
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {manga.map((item) => (
            <MangaCard key={item.id} manga={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MangaGallery;
