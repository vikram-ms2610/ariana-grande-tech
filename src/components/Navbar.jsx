import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#212529] text-white fixed w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6">
        {/* Left Side */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold"><Link to="/home"> Ariana Grande</Link></h1>
          <p className="text-sm text-gray-400">Tech Solution</p>
        </div>

        {/* Right Side Links */}
        <div className="ml-auto">
          {/* Hamburger Icon */}
          <button
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Links */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:space-x-6 items-center md:static absolute bg-[#212529] md:bg-transparent w-full left-0 p-6 md:p-0 top-16 md:top-0`}
          >
            <li>
              <Link
                to="/home"
                className="block text-lg hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/insight"
                className="block text-lg hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Insight
              </Link>
            </li>
           
            <li>
              <Link
                to="/servicesnav"
                className="block text-lg hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/reach-us"
                className="block text-lg hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reach Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;