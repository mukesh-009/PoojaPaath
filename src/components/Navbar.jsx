import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-cream shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/favicon.ico" alt="logo" className="h-8 w-8" />
          <h1 className="text-2xl font-bold text-maroon">Pooja Paath</h1>
        </div>

        <ul className="hidden md:flex space-x-6 text-maroon font-semibold">
          <li><a href="#home" className="hover:text-orange-600">Home</a></li>
          <li><a href="#poojas" className="hover:text-orange-600">Poojas</a></li>
          <li><a href="#booking" className="hover:text-orange-600">Book Now</a></li>
          <li><a href="#contact" className="hover:text-orange-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}