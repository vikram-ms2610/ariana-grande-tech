import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import Hamburger Icon (Place your icon file path here)
import HamburgerIcon from '../assets/navicon.png'; // Hamburger icon 
import CloseIcon from '../assets/naviconclose.png'; // Close icon 

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
          {/* Hamburger Icon - Only visible on mobile view */}
          <button
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {/* If menu is open, show Close icon; otherwise, show Hamburger icon */}
            <img 
              src={isOpen ? CloseIcon : HamburgerIcon} 
              alt={isOpen ? "Close menu" : "Open menu"} 
              className="w-6 h-6" 
            />
          </button>

          {/* Links */}
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex md:space-x-6 items-center md:static absolute bg-[#212529] md:bg-transparent w-full left-0 p-6 md:p-0 top-16 md:top-0 transition-all ease-in-out duration-300`}
          >
            <li>
              <Link
                to="/home"
                className="block text-lg hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/insight"
                className="block text-lg hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              >
                Insight
              </Link>
            </li>
            <li>
              <Link
                to="/servicesnav"
                className="block text-lg hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/reach-us"
                className="block text-lg hover:text-gray-400 transition-colors"
                onClick={() => setIsOpen(false)} // Close menu when a link is clicked
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
