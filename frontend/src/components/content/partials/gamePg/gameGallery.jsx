import React from "react";
import { useNavigate } from "react-router-dom";

import GameHead from "./gameHead";
import GameCard from "./gameCard";

const GameGallery = ({ game = [] }) => {
  const navigate = useNavigate();

  return (
    <section className="min-h-[calc(100vh+5rem)] bg-[#101010] text-white">
      <div className="mx-auto w-[90%] max-w-[1500px] py-24">
        <GameHead onBack={() => navigate("/contents")} />

        <div className="mb-8">
          <p className="text-[9px] uppercase tracking-[0.35em] text-white/30">
            Content
          </p>

          <h2 className="mt-3 text-3xl font-semibold uppercase tracking-tight">
            Game
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {game.map((item) => (
            <GameCard key={item.id} game={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameGallery;
