import React, { useState, useRef } from 'react';
import { HiPause, HiPlay } from 'react-icons/hi';
import { useLocation } from 'react-router-dom';

const SidebarHm = () => {
  const location = useLocation();
  const Bgmusic = "/assets/Audio/BgMusic.mp3";
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false);
  const audioRef = useRef(null);
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

  return (
    <div className="absolute left-0 top-0 z-40 h-screen w-64">

      <audio
        ref={audioRef}
        src={Bgmusic}
        loop
      />

      <aside className="relative flex h-full w-64 flex-col bg-black/65 backdrop-blur-xl border-r border-white/10 shadow-[10px_0_40px_rgba(0,0,0,0.35)]">

        {/* Decorative line */}
        <div className="absolute right-0 top-0 h-28 w-px bg-linear-to-b from-amber-500/70 via-amber-500/20 to-transparent" />

        {/* Logo Area */}
        <div className="px-6 pt-7 pb-6">
          <a
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="relative">
              <img
                src="/assets/img/Logo.png"
                className="h-11 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
                alt="Honkai Impact 3rd"
              />
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/30">
                Archive
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/75">
                HONKAI
              </p>
              <p className="text-[9px] uppercase tracking-[0.25em] text-amber-500/70">
                PROJECT
              </p>
            </div>
          </a>
        </div>

        {/* Section label */}
        <div className="px-6 mb-3">
          <div className="flex items-center gap-2">
            <span className="h-px w-5 bg-amber-500/60" />
            <span className="text-[8px] uppercase tracking-[0.3em] text-white/30">
              Navigation
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="px-4 flex-1">
          <ul className="space-y-1">
            {/* Home */}
            <li>
              <a
                href="/home"
                className={`group flex items-center gap-3 rounded-md border px-3 py-3 transition-all ${location.pathname === '/home' ? 'border-amber-500/20 bg-amber-500/5' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
              >
                <span className={`text-[9px] ${location.pathname === '/home' ? 'text-amber-500/70' : 'text-white/20 group-hover:text-amber-500/70'}`}>
                  01
                </span>
                <span className={`text-[11px] uppercase tracking-[0.12em] transition-colors ${location.pathname === '/home' ? 'text-amber-500' : 'text-white/50 group-hover:text-white'}`}>
                  Home(Alpha)
                </span>
              </a>
            </li>

            {/* News */}
            <li>
              <a
                href="/news"
                className={`group flex items-center gap-3 rounded-md border px-3 py-3 transition-all ${location.pathname === '/news' ? 'border-amber-500/20 bg-amber-500/5' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
              >
                <span className={`text-[9px] ${location.pathname === '/news' ? 'text-amber-500/70' : 'text-white/20 group-hover:text-amber-500/70'}`}>
                  02
                </span>
                <span className={`text-[11px] uppercase tracking-[0.12em] transition-colors ${location.pathname === '/news' ? 'text-amber-500' : 'text-white/50 group-hover:text-white'}`}>
                  News(Ongoing)
                </span>
              </a>
            </li>

            {/* Characters */}
            <li>
              <a
                href="/characters"
                className={`group flex items-center gap-3 rounded-md border px-3 py-3 transition-all ${location.pathname === '/characters' ? 'border-amber-500/20 bg-amber-500/5' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
              >
                <span className={`text-[9px] ${location.pathname === '/characters' ? 'text-amber-500/70' : 'text-white/20 group-hover:text-amber-500/70'}`}>
                  03
                </span>
                <span className={`text-[11px] uppercase tracking-[0.12em] transition-colors ${location.pathname === '/characters' ? 'text-amber-500' : 'text-white/50 group-hover:text-white'}`}>
                  Characters(Alpha)
                </span>
              </a>
            </li>

            {/* Lore */}
            <li>
              <a
                href="/lore"
                className={`group flex items-center gap-3 rounded-md border px-3 py-3 transition-all ${location.pathname === '/lore' ? 'border-amber-500/20 bg-amber-500/5' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
              >
                <span className={`text-[9px] ${location.pathname === '/lore' ? 'text-amber-500/70' : 'text-white/20 group-hover:text-amber-500/70'}`}>
                  04
                </span>
                <span className={`text-[11px] uppercase tracking-[0.12em] transition-colors ${location.pathname === '/lore' ? 'text-amber-500' : 'text-white/50 group-hover:text-white'}`}>
                  Lore(Ongoing)
                </span>

              </a>
            </li>

            {/* Contents */}
            <li>
              <a
                href="/contents"
                className={`group flex items-center gap-3 rounded-md border px-3 py-3 transition-all ${location.pathname === '/contents' ? 'border-amber-500/20 bg-amber-500/5' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
              >
                <span className={`text-[9px] ${location.pathname === '/contents' ? 'text-amber-500/70' : 'text-white/20 group-hover:text-amber-500/70'}`}>
                  05
                </span>
                <span className={`text-[11px] uppercase tracking-[0.12em] transition-colors ${location.pathname === '/contents' ? 'text-amber-500' : 'text-white/50 group-hover:text-white'}`}>
                  Contents(Ongoing)
                </span>
              </a>
            </li>


            {/* Media */}
            <li>
              <a
                href="/media"
                className={`group flex items-center gap-3 rounded-md border px-3 py-3 transition-all ${location.pathname === '/media' ? 'border-amber-500/20 bg-amber-500/5' : 'border-transparent hover:border-white/10 hover:bg-white/5'}`}
              >
                <span className={`text-[9px] ${location.pathname === '/media' ? 'text-amber-500/70' : 'text-white/20 group-hover:text-amber-500/70'}`}>
                  06
                </span>
                <span className={`text-[11px] uppercase tracking-[0.12em] transition-colors ${location.pathname === '/media' ? 'text-amber-500' : 'text-white/50 group-hover:text-white'}`}>
                  Media(Ongoing)
                </span>
              </a>
            </li>
          </ul>


          {/* Music */}
          <div className="mt-7 border-t border-white/10 pt-5">
            <div className="mb-3 px-3">
              <p className="text-[8px] uppercase tracking-[0.3em] text-white/25">
                Audio System
              </p>
            </div>

            <button
              onClick={toggleBgMusic}
              className="group flex w-full items-center gap-3 rounded-md border border-white/10 bg-white/5 px-3 py-3 hover:bg-amber-500/5 hover:border-amber-500/20 transition-all"
            >

              <div className="flex h-7 w-7 items-center justify-center rounded border border-white/10 bg-black/30">

                {isBgMusicPlaying ? (
                  <HiPause className="h-4 w-4 text-amber-500" />
                ) : (
                  <HiPlay className="h-4 w-4 text-white/50 group-hover:text-amber-500" />
                )}

              </div>

              <div className="text-left">

                <p className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                  Background Music
                </p>

                <p className="mt-1 text-[8px] text-white/25">
                  {isBgMusicPlaying ? "PLAYING" : "PAUSED"}
                </p>
              </div>
            </button>
          </div>
        </nav>

        {/* Social Media */}
        <div className="border-t border-white/10 px-6 py-5">
          <p className="mb-3 text-[8px] uppercase tracking-[0.3em] text-white/25">
            Official Social Media
          </p>
          <div className="flex items-center gap-3">


            {/* Discord */}
            <a
              href="https://discord.com/invite/hi3"
              className="opacity-40 hover:opacity-100 transition-opacity"
              title="Discord"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#f0f0f0" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12" alt="Discord" />
              </svg>
            </a>


            {/* Twitter */}
            <a
              href="https://twitter.com/umamusume"
              className="opacity-40 hover:opacity-100 transition-opacity"
              title="X"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25 " height="25" viewBox="0 0 24 24"><path fill="#f0f0f0" d="M17.751 2.96h3.067l-6.7 7.659L22 21.039h-6.172l-4.833-6.32l-5.531 6.32h-3.07l7.167-8.19L2 2.96h6.328l4.37 5.777zm-1.076 16.243h1.7L7.404 4.7H5.58z" alt="X" />
              </svg>
            </a>


            {/* Facebook */}
            <a
              href="https://www.facebook.com/global.honkaiimpact/"
              className="opacity-40 hover:opacity-100 transition-opacity"
              title="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#f0f0f0" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" alt="Facebook" />
              </svg>
            </a>


            {/* Instagram */}
            <a
              href="https://www.instagram.com/honkaiimpact3rd/"
              className="opacity-40 hover:opacity-100 transition-opacity"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#f0f0f0" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" alt="Instagram" />
              </svg>
            </a>


            {/* Youtube */}
            <a
              href="https://www.youtube.com/channel/UCko6H6LokKM__B03i5_vBQQ"
              className="opacity-40 hover:opacity-100 transition-opacity"
              title="Youtube"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#f0f0f0" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" alt="Youtube" />
              </svg>
            </a>

            {/* Hoyolab */}
            <a
              href="https://www.instagram.com/honkaiimpact3rd/"
              className="opacity-40 hover:opacity-100 transition-opacity"
              title="Hoyolab"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#f0f0f0" viewBox="0 0 80 80"><path d="m26 64-2-8 1-6-5-4q-2-2-1-3l2-1q3-2 3-5v-1q1-3 4-1v1q1-4 4-4 2-1 3 3l8-2h6l5-6q4-2 5 4l2 4 5 6a26 26 0 1 0-40 23m29-33v-2h-1q-2 2-3 5l1 1 1-1zm-19 8v2l13-3v-2l-6-1q-7 2-7 4m13 21q12-3 11-10-5-9-17-6-12 4-9 13c1 7 8 5 15 3M27 38h-1v1l-3 4-1 1v1l5 4v2h1v-2q0-3 3-5v-1l-1-1zm-2 7 2-2v-2l-2 1-1 1zm27 3v2l-2 1h2l2 2-2 1-3-1h-1l-1-1v-1l1-1 1-1 1-2zm-11 1 1 2 2 4-1 2h-2l-2-6z" alt="Hoyolab" /></svg>
            </a>

          </div>

          <p className="mt-4 text-[7px] uppercase tracking-[0.2em] text-white/15">
            System Online
          </p>

        </div>

      </aside>

    </div>
  );
};

export default SidebarHm;