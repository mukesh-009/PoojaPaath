import React, { useState } from "react";
import logo from "/images/Logo.jpeg";

export default function Navbar({ navigateTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-[9999]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left Logo */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 cursor-pointer"
            onClick={() => navigateTo("home")}
          />
          <h1
            className="text-xl font-bold cursor-pointer"
            onClick={() => navigateTo("home")}
          >
            Pooja Paath
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li>
            <button onClick={() => navigateTo("home")} className="hover:text-orange-400">
              Home
            </button>
          </li>
          <li>
            <a href="#booking" className="hover:text-orange-400">
              Book Now
            </a>
          </li>
          <li>
            <a href="tel:+919876543210" className="hover:text-orange-400">
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <button onClick={() => navigateTo("home")} className="block w-full text-left">
            Home
          </button>
          <a href="#booking" className="block w-full text-left">
            Book Now
          </a>
          <a href="tel:+919876543210" className="block w-full text-left">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}