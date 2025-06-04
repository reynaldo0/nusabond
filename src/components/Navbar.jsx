import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[99999] transition-transform duration-300 ease-out scale-90 md:scale-105">
      <div className="flex items-center justify-between rounded-full p-[2px] bg-gradient-to-r from-primary-300/70 to-primary-300/40 backdrop-blur-md">
        <div className="flex items-center space-x-2 md:space-x-4 bg-primary-300/50 rounded-full px-2 md:px-4 py-1">
          <div className="flex items-center justify-center w-10 h-10">
            <img
              src="illustrator/logo/navbar.png"
              draggable="false"
              alt="Logo"
              className="w-8 h-8 object-contain"
            />
          </div>
          <ul className="flex space-x-4 text-white">
            <li className="relative group">
              <Link
                to={"/"}
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-white before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Beranda
              </Link>
            </li>
            <li className="relative group">
              <Link
                to={"/about"}
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-white before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Tentang
              </Link>
            </li>
            <li className="relative group">
              <a
                href="about.html#eksplore"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-white before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Peta
              </a>
            </li>
            <li className="group relative">
              <a
                href="javascript:void(0)"
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-white before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100 fill-white"
              >
                Pulau
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="hidden ml-1 md:inline-block"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16"
                    data-original="#000000"
                  />
                </svg>
              </a>
              <div className="absolute lg:top-10 max-lg:top-8 -left-16 md:-left-6 z-50 flex shadow-lg bg-white max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-8 group-hover:pb-8 group-hover:pt-6 transition-all duration-500">
                <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                  <ul>
                    <li className="max-lg:border-b py-1 rounded relative group">
                      <Link
                        to={"/pulau-sumatera"}
                        className="block rounded px-2 py-1 transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                      >
                        Pulau Sumatera
                      </Link>
                    </li>
                    <li className="max-lg:border-b py-1 rounded relative group">
                      <Link
                        to={"/pulau-jawa"}
                        href="jawa.html"
                        className="block rounded px-2 py-1 transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                      >
                        Pulau Jawa
                      </Link>
                    </li>

                    <li className="max-lg:border-b py-1 rounded relative group">
                      <Link
                        to={"/pulau-kalimantan"}
                        href="kalimantan.html"
                        className="block rounded px-2 py-1 transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                      >
                        Pulau Kalimantan
                      </Link>
                    </li>
                    <li className="max-lg:border-b py-1 rounded relative group">
                      <Link
                        to={"/pulau-sulawesi"}
                        href="sulawesi.html"
                        className="block rounded px-2 py-1 transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                      >
                        Pulau Sulawesi
                      </Link>
                    </li>
                    <li className="max-lg:border-b py-1 rounded relative group">
                      <Link
                        to={"/pulau-papua"}
                        href="papua.html"
                        className="block rounded px-2 py-1 transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                      >
                        Pulau Papua
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
