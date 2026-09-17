import React from 'react';
import { useState, useEffect, useRef } from 'react';


const Navbar = () => {
  const Bgmusic = "/assets/Audio/BgMusic.mp3";
  const [isBgMusicPlaying, setIsBgMusicPlaying] = useState(false);
  const audioRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
      <audio ref={audioRef} src={Bgmusic} loop />

      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/assets/img/Logo.png" className="h-10 w-auto" alt="Honkai Impact 3rd Logo" />
          </a>

          {/* Right Button */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <div className="h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer flex">
            <button
              onClick={toggleBgMusic}
              className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
            >
              <img src="https://parts.umamusume.com/assets/images/logo_umamusume.png" className={isBgMusicPlaying ? "Pause Music" : "Play Music"} alt="X"
              />
            </button>
            </div>
          <a href="https://umamusume.com/" target="_blank" rel="noopener noreferrer">
            <button type="button" className="text-white bg-pink-500 hover:bg-pink-600 font-medium rounded-lg text-sm px-4 py-2">
              Get Started
            </button>
          </a>
        </div>

        {/* List */}
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a href="/home" className="block py-2 px-3 text-pink-500 md:p-0">
                Home(Ongoing)
              </a>
            </li>
            <li>
              <a href="/news" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0">
                News(Ongoing)
              </a>
            </li>
            <li>
              <a href="/characters" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0">
                Characters
              </a>
            </li>


            <li className="relative" ref={dropdownRef}>
              <a href="/content" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0">
                Content(Ongoing)
              </a>
              <button
                onClick={toggleDropdown}
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
                img src="/asssets/img/Logo.png"
              >
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 w-48 bg-white rounded-md shadow-lg py-1 z-30 border border-gray-200">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500">Game</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500">Anime</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500">Manga</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-pink-500">Music</a>

                </div>
              )}
            </li>

            <li>
              <a href="/media" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0">
                Media(Ongoing)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
    </>
  );
};

export default Navbar;   