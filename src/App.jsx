import React, { useState } from "react";
import Navbar from "./components/Section1/Navbar";
import FrontPage from "./components/Section2/FrontPage";
import PoojaGrid from "./components/Section2/PoojaGrid";
import BookingSection from "./components/Section3/BookingSection"; 
import Footer from "./components/Section3/Footer";
// Import the new PoojaListPage
import PoojaListPage from "./components/Section4/PoojaListPage";
import { FaWhatsapp } from "react-icons/fa";
import { poojas } from "./data/samplePoojas";

export default function App() {
  // State to manage the current view: 'home' or 'all-poojas'
  const [currentView, setCurrentView] = useState('home'); 

  // Function to navigate
  const navigateTo = (view) => {
    setCurrentView(view);
    // Optional: Scroll to the top when changing pages
    window.scrollTo(0, 0); 
  };
  
  return (
    <div className=" pt-20 font-devanagari bg-secondary text-primary dark:bg-bg-dark dark:text-text-dark transition-colors duration-300">
      {/* Pass the navigation function down to Navbar */}
      <Navbar navigateTo={navigateTo} /> 
      
      {currentView === 'home' ? (
        <>
          {/* Default Landing Page View */}
          <FrontPage navigateTo={navigateTo} />
          <PoojaGrid items={poojas} />
          <BookingSection poojas={poojas} /> {/* Pass poojas for dropdown */}
        </>
      ) : (
        // Dedicated Pooja List Page View
        <PoojaListPage poojas={poojas} />
      )}
      
      <Footer />

      {/* Floating WhatsApp Button */}
<a
  href="https://wa.me/919876543210?text=Hello%20I%20want%20to%20book%20a%20pooja"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg text-3xl z-50"
>
  <FaWhatsapp />
</a>
    </div>
  );
}