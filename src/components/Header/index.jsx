import React, { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav((prevState) => !prevState);
  };

  return (
    <header id="home" className="bg-[#04181D] fixed w-full z-10 shadow-md">
      <div className="px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* {logo} */}
          <div className="flex items-center gap-12">
            <a className="block text-teal-600" href="#home">
              <h1 className="text-3xl font-nunito font-bold">GoblinZ</h1>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* {normal navigation} */}
            <nav
              className="hidden md:block"
              aria-labelledby="header-navigation"
            >
              {/* <h2 className="sr-only" id="header-navigation">
                Header navigation
              </h2> */}

              <ul className="flex items-center text-sm gap-6 text-white">
                <li>
                  <a
                    className="hover:text-teal-600"
                    href="https://goblinz-token.gitbook.io/goblinz/nft-multiplier"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Docs
                  </a>
                </li>

                <li>
                  <a className="hover:text-teal-600" href="#stats">
                    Stats
                  </a>
                </li>

                <li>
                  <a className="hover:text-teal-600" href="#features">
                    Features
                  </a>
                </li>

                <li>
                  <a className="hover:text-teal-600" href="#story">
                    Story
                  </a>
                </li>
              </ul>
            </nav>
            {/* {hidden when larger} */}
            <div className="flex items-center gap-4">
              <div className="sm:gap-4 sm:flex">
                <a
                  className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-md shadow"
                  href="https://user-demo-goblin-mint-dapp-qmqb.vercel.app/"
                  target="_black"
                  rel="noreferrer"
                >
                  Mint
                </a>

                <div className="hidden sm:flex">
                  <a
                    className="px-5 py-2.5 text-sm font-medium text-black bg-gray-100 hover:bg-gray-300 rounded-md"
                    href="https://user-demo-token-stake.vercel.app/"
                    target="_black"
                    rel="noreferrer"
                  >
                    Stake
                  </a>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  onClick={handleNav}
                  className="p-2 text-gray-600 bg-gray-100 rounded transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
              {/* Side Drawer Menu */}
              <div
                className={
                  nav
                    ? "md:hidden fixed left-0 top-0 w-full h-screen drop-shadow-2xl "
                    : null
                }
              >
                <div
                  className={
                    nav
                      ? "bg-[#04181D] fixed z-50 flex flex-col justify-between left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen text-white p-10 ease-in duration-500"
                      : "fixed left-[-130%] top-0 p-10 ease-in duration-500"
                  }
                >
                  <div className="flex flex-col w-full items-center justify-between">
                    <div className="flex justify-between items-center w-full mb-5">
                      <h1 className="text-2xl font-nunito">GoblinZ</h1>
                      <div
                        onClick={handleNav}
                        className="rounded shadow-lg bg-teal-600 w-9 h-9 text-white p-2 flex justify-center items-center cursor-pointer"
                      >
                        &#10005;
                      </div>
                    </div>

                    <ul className="uppercase w-full h-fit">
                      <a href="#about">
                        <li
                          onClick={() => setNav(false)}
                          className="py-4 text-sm"
                        >
                          about
                        </li>
                      </a>
                      <a href="#stats">
                        <li
                          onClick={() => setNav(false)}
                          className="py-4 text-sm"
                        >
                          Stats
                        </li>
                      </a>
                      <a href="#features">
                        <li
                          onClick={() => setNav(false)}
                          className="py-4 text-sm"
                        >
                          Features
                        </li>
                      </a>
                      <a href="#story">
                        <li
                          onClick={() => setNav(false)}
                          className="py-4 text-sm"
                        >
                          Story
                        </li>
                      </a>
                      <a href="#contact">
                        <li
                          onClick={() => setNav(false)}
                          className="py-4 text-sm"
                        >
                          Contact
                        </li>
                      </a>
                    </ul>
                  </div>

                  <div className="py-4 flex flex-col">
                    <div className="-blue-500">
                      <div className="flex justify-center items-center gap-3">
                        <a
                          className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow"
                          href="https://www.youtube.com/watch?v=vDqULFUg6CY"
                          target="_black"
                          rel="noreferrer"
                        >
                          Mint
                        </a>

                        <a
                          className="px-5 py-2.5 text-sm font-medium text-teal-600 bg-gray-100 rounded-md"
                          href="https://www.youtube.com/watch?v=vDqULFUg6CY"
                          target="_black"
                          rel="noreferrer"
                        >
                          Stake
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
