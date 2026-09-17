import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const Bgmusic = "/assets/Audio/BgMusic.mp3";
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleBgMusic = () => {
    if (!audioRef.current) return;
    if (isBgMusicPlaying) {
      audioRef.current.pause();
      setIsBgMusicPlaying(false);
    } else {
      audioRef.current.play();
      setIsBgMusicPlaying(true);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={Bgmusic}
        loop
      />
      <nav className="fixed top-0 inset-s-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.35)]">
        <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto px-5 py-3">

          {/* Logo */}
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse group"
          >
            <img
              src="/assets/img/Logo.png"
              className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              alt="Honkai Impact 3rd Logo"
            />
            <div className="hidden sm:block border-l border-white/15 pl-3">
              <p className="text-[9px] tracking-[0.3em] uppercase text-white/35">
                Project
              </p>
              <p className="text-xs tracking-[0.18em] text-white/75">
                HONKAI
              </p>
            </div>
          </a>

          {/* Right Button */}
          <div className="flex md:order-2 items-center gap-2">
            {/* Music */}
            <div className="h-9 w-9 flex items-center justify-center rounded-md border border-amber-500/10 bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
              <button
                onClick={toggleBgMusic}
                className="flex items-center justify-center w-full h-full text-white/70 hover:text-amber-500 transition-colors"
                title={isBgMusicPlaying ? "Pause Music" : "Play Music"}
              >
                {isBgMusicPlaying ? "Ⅱ" : "▶"}
              </button>
            </div>


            {/* Get Started */}
            <a href="https://honkaiimpact3.hoyoverse.com/asia/en-us/home" target="_blank" rel="noopener noreferrer"
            >
              <button
                type="button"
                className="text-xs tracking-[0.12em] uppercase text-white/90 border border-amber-500/40 bg-amber-500/10 hover:bg-white-500/20 hover:border-white-400/70 font-medium rounded-md px-4 py-2 transition-all"
              >
                Get Started
              </button>
            </a>
          </div>


          {/* Navigation */}
          <div className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto">
            <ul className="flex flex-col items-center p-3 font-medium border border-white/10 rounded-md bg-black/70 backdrop-blur-xl md:flex-row md:space-x-7 md:border-0 md:bg-transparent">
              <li className="flex items-center">
                <a
                  href="/home"
                  className={`block px-2 py-2 text-[11px] uppercase tracking-[0.15em] transition-colors md:p-0 ${location.pathname === '/home' ? 'text-amber-500' : 'text-white/55 hover:text-amber-500'}`}
                >
                  Home(Alpha)
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="/news"
                  className={`block px-2 py-2 text-[11px] uppercase tracking-[0.15em] rounded transition-colors md:p-0 ${location.pathname === '/news' ? 'text-amber-500' : 'text-white/55 hover:text-amber-500'}`}
                >
                  News(Ongoing)
                </a>
              </li>

              <li className="flex items-center">
                <a
                  href="/characters"
                  className={`block px-2 py-2 text-[11px] uppercase tracking-[0.15em] rounded transition-colors md:p-0 ${location.pathname === '/characters' ? 'text-amber-500' : 'text-white/55 hover:text-amber-500'}`}
                >
                  Characters(Alpha)
                </a>
              </li>

              <li className="flex items-center">
                <a
                  href="/news"
                  className={`block px-2 py-2 text-[11px] uppercase tracking-[0.15em] rounded transition-colors md:p-0 ${location.pathname === '/news' ? 'text-amber-500' : 'text-white/55 hover:text-amber-500'}`}
                >
                  Lore(Ongoing)
                </a>
              </li>
              
              {/* Content Dropdown */}
              <li
                className={`relative flex items-center ${location.pathname === '/contents' ? 'text-amber-500' : ''}`}
                ref={dropdownRef}
              >
                <div className="flex items-center">
                  <a
                    href="/contents"
                    className={`block px-2 py-2 text-[11px] uppercase tracking-[0.15em] rounded transition-colors md:p-0 ${location.pathname === '/contents' ? 'text-amber-500' : 'text-white/55 hover:text-amber-500'}`}
                  >
                    Content(Ongoing)
                  </a>
                  <button
                    onClick={toggleDropdown}
                    className="ml-1 text-white/35 hover:text-amber-500 transition-colors"
                  >
                    <span className="text-[9px]">
                      {dropdownOpen ? "▲" : "▼"}
                    </span>
                  </button>
                </div>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-44 bg-black/90 backdrop-blur-xl rounded-md border border-white/10 shadow-2xl overflow-hidden">

                    <a
                      href="/game"
                      className="block px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-white/55 hover:text-amber-500 hover:bg-white/5 transition-colors"
                    >
                      Game(Ongoing)
                    </a>

                    <a
                      href="/anime"
                      className="block px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-white/55 hover:text-amber-500 hover:bg-white/5 transition-colors"
                    >
                      Anime(Ongoing)
                    </a>

                    <a
                      href="/manga"
                      className="block px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-white/55 hover:text-amber-500 hover:bg-white/5 transition-colors"
                    >
                      Manga(Ongoing)
                    </a>

                    <a
                      href="/music"
                      className="block px-4 py-3 text-[10px] uppercase tracking-[0.15em] text-white/55 hover:text-amber-500 hover:bg-white/5 transition-colors"
                    >
                      Music(Ongoing)
                    </a>

                  </div>
                )}

              </li>

            </ul>

          </div>

        </div>

      </nav>
    </>
  );
};

export default Navbar;