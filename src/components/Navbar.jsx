import React, { useState } from "react";
import { Link } from "react-router-dom";
import navicon from "../assets/navicon.png";

function Navbar() {
  const [ismenuopen, setismenuopen] = useState(false);

  return (
    <>
      <div className="w-full h-50 absolute fixed bg-[#212529]">
        <header className="flex justify-between items-center text-white py-6 px-8 md:px-32">
          {/* Nav heading */}
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
            src={navicon}
            alt="Menu"
            className="xl:hidden w-8 h-8  block text-5xl cursor-pointer"
            onClick={() => setismenuopen(!ismenuopen)}
          />

          {/* Mobile View Nav Items */}
          <div
            className={`absolute xl:hidden top-24 left-0 w-full bg-[#212529] flex flex-col items-center gap-6 font-semibold text-lg transition-transform duration-300 ${
              ismenuopen ? "opacity-100" : "hidden"
            }`}
          >
            <li className="list-none w-full text-center p-1 transition-all cursor-pointer">
              <Link to="/home">Home</Link>
            </li>
            <li className="list-none w-full text-center p-1 transition-all cursor-pointer">
              <Link to="/insight">Insight</Link>
            </li>
            <li className="list-none w-full text-center p-1 transition-all cursor-pointer">
              <Link to="/servicesnav">Services</Link>
            </li>
            <li className="list-none w-full text-center p-1 transition-all cursor-pointer">
              <Link to="/reach-us">Reach Us</Link>
            </li>
          </div>
        </header>
      </div>
    </>
  );
}

export default Navbar;
