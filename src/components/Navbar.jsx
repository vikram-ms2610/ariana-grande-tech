import React, { useState } from "react";
import { Link } from "react-router-dom";
import navicon from "../assets/navicon_enhanced.png";
import closeicon from "../assets/closeicon_enhanced.png"; // Updated icons with enhanced blue color

function Navbar() {
  const [ismenuopen, setismenuopen] = useState(false);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="w-full fixed top-0 left-0 bg-[#212529] z-50 shadow-md">
        <header className="flex justify-between items-center text-white py-6 px-8 md:px-32">
          {/* Nav Heading */}
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">
              <Link to="/home">Ariana Grande</Link>
            </h1>
            <p className="text-sm text-gray-400">Tech Solution</p>
          </div>

          {/* Desktop Nav Links */}
          <ul className="hidden xl:flex items-center gap-12 font-semibold text-base">
            <li>
              <Link to="/home" className="p-3 hover:text-gray-400 transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link to="/insight" className="p-3 hover:text-gray-400 transition-all">
                Insight
              </Link>
            </li>
            <li>
              <Link to="/servicesnav" className="p-3 hover:text-gray-400 transition-all">
                Services
              </Link>
            </li>
            <li>
              <Link to="/reach-us" className="p-3 hover:text-gray-400 transition-all">
                Reach Us
              </Link>
            </li>
          </ul>

          {/* Hamburger Menu - Mobile View */}
          <img
            src={ismenuopen ? closeicon : navicon} // Toggle icon
            alt="Menu"
            className="xl:hidden w-8 h-8 block cursor-pointer" // Remove unnecessary filters
            onClick={() => setismenuopen(!ismenuopen)}
          />
        </header>

        {/* Mobile View Nav Items */}
        <div
          className={`absolute xl:hidden top-[72px] left-0 w-full bg-[#212529] flex flex-col items-center gap-6 font-semibold text-lg transition-all ${
            ismenuopen ? "opacity-100 h-auto py-4" : "opacity-0 h-0 overflow-hidden"
          }`}
        >
          <li className="list-none w-full text-center p-1 transition-all cursor-pointer">
            <Link to="/home" className="text-white hover:text-gray-400">Home</Link>
          </li>
          <li className="list-none w-full text-center p-1 transition-all cursor-pointer">
            <Link to="/insight" className="text-white hover:text-gray-400">Insight</Link>
          </li>
          <li className="list-none w-full text-center p-1 transition-all cursor-pointer">
            <Link to="/servicesnav" className="text-white hover:text-gray-400">Services</Link>
          </li>
          <li className="list-none w-full text-center p-1 transition-all cursor-pointer">
            <Link to="/reach-us" className="text-white hover:text-gray-400">Reach Us</Link>
          </li>
        </div>
      </div>

      {/* Add Padding to Prevent Overlapping */}
      <div className="pt-[80px]"></div>
    </>
  );
}

export default Navbar;
