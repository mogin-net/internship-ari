import React from 'react';

const Interface = () => {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

          {/* Logo */}
          <a href="/"className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="https://parts.umamusume.com/assets/images/logo_umamusume.png" className="h-10 w-auto" alt="Umamusume Logo"
            />
          </a>

          {/*Right Button */}
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="https://umamusume.com/" target="_blank" rel="noopener noreferrer ">
            <button type="button" className="text-white bg-pink-500 hover:bg-pink-600 font-medium rounded-lg text-sm px-4 py-2"
            >
              Get Started
            </button>
          </a>
          </div>

          {/* List */}
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-200 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 px-3 text-pink-500 md:p-0">
                  Home(Ongoing)
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
                >
                  News(Ongoing)
                </a>
              </li>
              <li>
                <a href="/characters" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
                >
                  Characters
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-pink-500 md:p-0"
                >
                  Media(Ongoing)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Interface;