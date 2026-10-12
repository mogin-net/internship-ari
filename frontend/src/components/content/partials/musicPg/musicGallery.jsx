import React from "react";
import { useNavigate } from "react-router-dom";
import MusicHead from "./musicHead";
import MusicCard from "./musicCard";

const MusicGallery = ({ music = [] }) => {
  const navigate = useNavigate();
  return (
    <section className="min-h-[calc(100vh+5rem)] bg-[#101010] text-white">
      <div className="mx-auto w-[90%] max-w-[1500px] py-24">
        <MusicHead onBack={() => navigate("/contents")} />

        <div className="mb-8">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
            Content
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight">
            Music
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {music.map((item) => (
            <MusicCard key={item.id} music={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicGallery;
