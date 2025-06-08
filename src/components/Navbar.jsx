import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Tutup dropdown jika klik di luar dropdown (buat UX lebih baik)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Toggle dropdown ketika klik di mobile
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

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
              <Link
                to={"/quiz"}
                className="block rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-white before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
              >
                Quiz
              </Link>
            </li>
            {/* Dropdown Pulau */}
            <li className="relative group" ref={dropdownRef}>
              {/* Tombol dropdown */}
              <button
                onClick={toggleDropdown}
                className="flex items-center rounded px-2 py-1 transition-all duration-300 text-white hover:text-white-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-white before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                type="button"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                Pulau
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  height="16px"
                  className="ml-1 md:inline-block"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" />
                </svg>
              </button>
              {/* Dropdown content */}
              <div
                className={`absolute lg:top-10 max-lg:top-8 -left-16 md:-left-6 z-50 flex flex-col gap-2 shadow-lg bg-white max-h-0 overflow-hidden px-8 pb-0 pt-0 transition-all duration-500
                ${
                  isDropdownOpen
                    ? "max-h-[700px] opacity-100 pt-6 pb-8"
                    : "opacity-0"
                }
                group-hover:max-h-[700px] group-hover:opacity-100 group-hover:pt-6 group-hover:pb-8
                `}
              >
                <div className="lg:min-w-[180px] max-lg:min-w-[140px]">
                  <ul>
                    {[
                      { to: "/pulau-sumatera", label: "Pulau Sumatera" },
                      { to: "/pulau-jawa", label: "Pulau Jawa" },
                      { to: "/pulau-kalimantan", label: "Pulau Kalimantan" },
                      { to: "/pulau-sulawesi", label: "Pulau Sulawesi" },
                      { to: "/pulau-papua", label: "Pulau Papua" },
                    ].map(({ to, label }) => (
                      <li
                        key={to}
                        className="max-lg:border-b py-1 rounded relative group"
                      >
                        <Link
                          to={to}
                          className="block rounded px-2 py-1 transition-all duration-300 text-primary-200 hover:text-primary-400 before:absolute before:-bottom-1 before:left-0 before:h-[2px] before:w-full before:scale-x-0 before:bg-black before:opacity-0 before:transition before:content-[''] hover:before:scale-x-100 hover:before:opacity-100"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
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
