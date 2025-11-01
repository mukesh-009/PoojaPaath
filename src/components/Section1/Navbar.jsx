import React, { useState } from "react";
import logo from "/images/Logo.jpeg";
import { CONTACT_INFO } from "../../constants/contactInfo";

export default function Navbar({ navigateTo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle "Home" button click
  const handleHomeClick = () => {
    navigateTo("home"); // Navigate to home view
    setMenuOpen(false); // Close mobile menu if open
  };

  // Function to handle "Book Now" button click
  const handleBookNowClick = () => {
    navigateTo("home"); // First navigate to home (in case user is on another page)
    setMenuOpen(false); // Close mobile menu if open
    
    // Small delay to ensure page loads before scrolling
    setTimeout(() => {
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  // Function to handle "Testimonies" button click
  const handleTestimoniesClick = () => {
    navigateTo("testimonies");
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full top-0 z-[9999]">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
        
        {/* Left Logo - Clickable to go home */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src={logo}
            alt="logo"
            className="h-8 w-8 sm:h-10 sm:w-10 cursor-pointer hover:opacity-80 transition touch-manipulation"
            onClick={handleHomeClick}
          />
          <h1
            className="text-lg sm:text-xl font-bold cursor-pointer hover:text-orange-400 transition touch-manipulation"
            onClick={handleHomeClick}
          >
            Pooja Paath
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li>
            <button 
              onClick={handleHomeClick} 
              className="hover:text-orange-400 transition duration-200"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={handleTestimoniesClick} 
              className="hover:text-orange-400 transition duration-200"
            >
              Testimonies
            </button>
          </li>
          <li>
            <button 
              onClick={handleBookNowClick} 
              className="hover:text-orange-400 transition duration-200"
            >
              Book Now
            </button>
          </li>
          <li>
            <a 
              href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
              className="hover:text-orange-400 transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <button
          className="md:hidden text-2xl hover:text-orange-400 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4 animate-slide-down">
          <button 
            onClick={handleHomeClick} 
            className="block w-full text-left hover:text-orange-400 transition py-2"
          >
            Home
          </button>
          <button 
            onClick={handleTestimoniesClick} 
            className="block w-full text-left hover:text-orange-400 transition py-2"
          >
            Testimonies
          </button>
          <button 
            onClick={handleBookNowClick} 
            className="block w-full text-left hover:text-orange-400 transition py-2"
          >
            Book Now
          </button>
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`}
            className="block w-full text-left hover:text-orange-400 transition py-2"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}