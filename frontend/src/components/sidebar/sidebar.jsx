import React from 'react';
import { useState, useRef } from 'react';
import { Sidebar, SidebarItem, SidebarItemGroup, SidebarItems, SidebarLogo } from "flowbite-react";
import { HiPause, HiPlay } from "react-icons/hi";
import { SocialIcon } from 'react-social-icons';


const SidebarHm = () => {
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
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
    <div className='font-semibold'>
      <audio ref={audioRef} src={Bgmusic} loop />
        <Sidebar aria-label="Sidebar with logo branding example " className=" w-64 h-screen shrink-0"  >
          <SidebarLogo href="/" img="/assets/img/Logo.png" imgAlt="Honkai Impact 3rd">
            HONKAI <br></br> PROJECT
          </SidebarLogo>
          <SidebarItems>
            <SidebarItemGroup className="px-4">
              <SidebarLogo img='/assets/img/Ic_bar.webp'>
                <SidebarItem href="/home">
                  Home(Alpha)
                </SidebarItem>
              </SidebarLogo>
              <SidebarLogo img='/assets/img/Ic_bar.webp'>
                <SidebarItem href="/news">
                  News(Ongoing)
                </SidebarItem>
              </SidebarLogo>
              <SidebarLogo img='/assets/img/Ic_bar.webp'>
                <SidebarItem href="/characters">
                  Characters(Alpha)
                </SidebarItem>
              </SidebarLogo>
              <SidebarLogo img='/assets/img/Ic_bar.webp'>
                <SidebarItem href="/lore">
                  Lore(Ongoing)
                </SidebarItem>
              </SidebarLogo>
              <SidebarLogo img='/assets/img/Ic_bar.webp'>
                <SidebarItem href="/contents">
                  Contents(Ongoing)
                </SidebarItem>
              </SidebarLogo>
              <SidebarLogo img='/assets/img/Ic_bar.webp'>
                <SidebarItem href="/media">
                  Media(Ongoing)
                </SidebarItem>
              </SidebarLogo>
              <SidebarItem>
                <button
                  onClick={toggleBgMusic}
                  className="block py-2 px-3 text-white-900 rounded md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
                >
                  {isBgMusicPlaying ? (
                    <HiPause className="w-6 h-6" />
                  ) : (
                    <HiPlay className="w-6 h-6" />
                  )}
                </button>
              </SidebarItem>
              <Sidebar className="vertical-lr">
                <ul className="text-body font-medium">
                  {/* Discord */}
                  <li className="mb-2">
                    <a href="https://discord.com/invite/hi3" className="hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#6366f1" d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.1.1 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.1 16.1 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02M8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12m6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12" alt="Discord" />
                      </svg>
                    </a>
                  </li>
                  {/* Twitter */}
                  <li className="mb-2">
                    <a href="https://twitter.com/umamusume" className="hover:underline s">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25 " height="25" viewBox="0 0 24 24"><path fill="#6366f1" d="M17.751 2.96h3.067l-6.7 7.659L22 21.039h-6.172l-4.833-6.32l-5.531 6.32h-3.07l7.167-8.19L2 2.96h6.328l4.37 5.777zm-1.076 16.243h1.7L7.404 4.7H5.58z" alt="X" /></svg>
                    </a>
                  </li>
                  {/* Facebook */}
                  <li className="mb-2">
                    <a href="https://www.facebook.com/global.honkaiimpact/" className="hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#6366f1" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95" alt="Facebook" />
                      </svg>
                    </a>
                  </li>
                  {/* Instagram */}
                  <li className="mb-2">
                    <a href="https://www.instagram.com/honkaiimpact3rd/" className="hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#6366f1" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" alt="Instagram" />
                      </svg>
                    </a>
                  </li>
                  {/* Youtube */}
                  <li className="mb-2">
                    <a href="https://www.youtube.com/channel/UCko6H6LokKM__B03i5_vBQQ" className="hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="#6366f1" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" alt="Youtube" />
                      </svg>
                    </a>
                  </li>
                  {/* Hoyolab */}
                  <li className="mb-2">
                    <a href="https://www.instagram.com/honkaiimpact3rd/" className="hover:underline">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 80 80" fill="#6366f1"><path d="M26.246 63.8787C25.0962 61.886 24.2777 59.1786 24.2777 55.5007C24.2777 54.5567 24.3765 52.6956 24.6195 50.4113C23.6038 48.3744 21.9014 46.7306 19.7747 45.8074L19.6866 45.7691C18.533 45.2683 18.3504 43.6953 19.3582 42.9394L21.1656 41.5835C22.6853 40.4435 23.6811 38.73 23.9248 36.8357L24.0341 35.9862C24.2779 34.0911 26.8448 33.7299 27.5936 35.4854L27.887 36.1732C28.9069 33.9276 30.189 32.2704 31.7883 31.8013C33.162 31.3984 34.0271 33.3483 34.8047 35.101L34.8054 35.1027C34.86 35.2258 34.9144 35.3484 34.9683 35.4687C36.5828 34.2829 39.1757 33.0984 42.8462 32.6204C45.4508 32.2812 47.353 32.3699 48.7071 32.6984C49.7807 30.6408 51.6576 27.9372 53.6388 26.9197C57.1696 25.1064 58.1016 28.3043 58.9734 31.2958C59.4118 32.8001 59.835 34.2523 60.5659 34.9888C61.9706 36.4043 64.6351 39.1383 66.169 40.8827C65.7845 26.7629 54.2176 15.4347 40.0049 15.4347C25.5495 15.4347 13.831 27.1532 13.831 41.6087C13.831 51.0167 18.7947 59.2653 26.246 63.8787ZM54.8959 30.7097C55.2296 30.4051 55.6628 29.9292 55.4602 29.4495C55.2284 28.9007 54.4015 28.8665 53.7471 29.3682C52.2759 30.4963 51.5551 32.3788 51.4131 33.8487C51.3599 34.3996 51.5247 34.7597 51.9434 34.8257C52.362 34.8917 52.6238 34.5614 52.7697 34.1753C53.5468 32.119 54.187 31.3569 54.8959 30.7097ZM35.5033 38.6456C34.797 39.6182 35.2733 40.5619 36.1007 40.7533C41.8509 38.8984 47.9864 38.1378 48.7616 38.0662C49.5137 37.9967 49.6075 36.9306 49.31 36.2142C49.0124 35.4979 47.3757 34.6314 42.9746 35.2756C38.5735 35.9198 36.2095 37.673 35.5033 38.6456ZM49.1325 60.2072C57.0223 58.0724 60.7369 53.9441 59.7317 50.2133C57.9311 43.5307 50.148 41.513 42.9663 43.6058C35.0091 45.9246 32.1224 51.9154 33.5147 56.9967C35.3069 63.5371 42.3858 62.0327 49.1325 60.2072ZM26.5706 38.1757C26.3823 37.7617 25.7787 37.8329 25.6903 38.2796L25.5842 38.8162C25.228 40.6165 24.1894 42.2056 22.6892 43.2453L21.8926 43.7974C21.5839 44.0114 21.6391 44.4866 21.9884 44.6228L22.4364 44.7976C24.3984 45.5629 25.9141 47.1789 26.5628 49.1972L27.1589 51.0517C27.316 51.5404 28.0255 51.4567 28.0664 50.9446L28.2361 48.8212C28.3968 46.8101 29.4045 44.965 31.0039 43.7531L31.3233 43.5111C31.6086 43.2949 31.5568 42.8487 31.2297 42.7048L30.4258 42.3512C28.8508 41.6584 27.5841 40.4046 26.8678 38.8293L26.5706 38.1757ZM25.1451 44.6342C25.8098 44.3438 26.268 43.7293 26.5255 43.3191C26.6655 43.0961 26.7733 42.8888 26.8464 42.7372C27.1086 42.1929 27.1159 41.5624 26.5 41.2979C25.8421 41.0154 25.5185 41.5823 25.2314 42.0854L25.2314 42.0854L25.2314 42.0854C25.1805 42.1747 25.1307 42.2619 25.0804 42.342C24.866 42.6835 24.6443 42.9109 24.4758 42.9845C24.0369 43.1763 23.8308 43.7011 24.0157 44.1567C24.2005 44.6122 24.7062 44.826 25.1451 44.6342ZM52.1476 47.6257C52.573 48.2529 52.5029 49.09 51.9083 49.5567L51.9047 49.5596L51.8873 49.5733C51.8713 49.5862 51.8464 49.6061 51.8142 49.6324C51.7495 49.685 51.6557 49.7626 51.5432 49.8589C51.316 50.0534 51.023 50.3154 50.7439 50.5967C50.6414 50.7 50.5464 50.8002 50.4606 50.8958C50.5852 50.9248 50.7199 50.9524 50.8625 50.9781C51.2509 51.0482 51.6398 51.0945 51.9364 51.1232C52.0833 51.1375 52.2043 51.1471 52.2871 51.1531C53.0614 51.209 53.7413 51.7692 53.6973 52.6082C53.6574 53.3673 53.0145 53.9501 52.2619 53.9099C52.0661 53.8989 51.8705 53.8824 51.6753 53.8635C51.3343 53.8304 50.867 53.7755 50.3817 53.6879C49.9098 53.6027 49.3577 53.4758 48.8757 53.28C48.6349 53.1821 48.3589 53.0463 48.1076 52.8528C47.8621 52.6637 47.5467 52.3468 47.3969 51.865C47.247 51.3832 47.3264 50.9414 47.4209 50.6447C47.5175 50.3412 47.6671 50.0707 47.8094 49.8517C48.0941 49.4133 48.4755 48.9911 48.8146 48.6493C49.2537 48.2069 49.722 47.746 50.2321 47.3841C50.8478 46.9473 51.7304 47.0106 52.1476 47.6257ZM40.7664 49.3267C41.6159 49.2361 42.3774 49.8572 42.4673 50.7139C42.6221 52.1901 42.9927 53.747 43.7094 54.8178C44.1873 55.5319 44.0007 56.5015 43.2927 56.9835C42.5846 57.4655 41.6232 57.2773 41.1453 56.5632C40.0034 54.857 39.5636 52.6882 39.391 51.0421C39.3011 50.1854 39.9169 49.4174 40.7664 49.3267Z" alt="Instagram" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </Sidebar>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
    </div>
    </>
  )
}

export default SidebarHm
