import React, { useState, useEffect } from "react";
import logo from "/images/Logo.jpeg";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <nav className="bg-cream  shadow-md fixed w-full top-0 z-[9999] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-maroon dark:text-orange-400">
            Pooja Paath
          </h1>
        </div>

        <ul className="hidden md:flex space-x-6 text-maroon font-semibold dark:text-yellow-3000">
          <li><a href="#home" className="hover:text-orange-600">Home</a></li>
          <li className="relative group">
            <a href="#poojas" className="hover:text-orange-600">
              Poojas ▾
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-cream dark:bg-gray-800 text-maroon dark:text-orange-200 mt-2 py-2 w-44 shadow-lg rounded-md">
              <li><a href="#online" className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-700">Online Poojas</a></li>
              <li><a href="#pandit" className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-700">Book a Pandit</a></li>
              <li><a href="#special" className="block px-4 py-2 hover:bg-orange-100 dark:hover:bg-gray-700">Special Poojas</a></li>
            </ul>
          </li>
          <li><a href="#booking" className="hover:text-orange-600">Book Now</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
        </ul>

        
      </div>
    </nav>
  );
}
