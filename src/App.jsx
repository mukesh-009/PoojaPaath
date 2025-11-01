import React, { useState, useEffect } from "react";
import Navbar from "./components/Section1/Navbar";
import FrontPage from "./components/Section2/FrontPage";
import PoojaGrid from "./components/Section2/PoojaGrid";
import BookingSection from "./components/Section3/BookingSection";
import Footer from "./components/Section3/Footer";
import PoojaListPage from "./components/Section4/PoojaListPage";
import HavanListPage from "./components/Section4/HavanListPage";
import TestimoniesPage from "./components/Section4/TestimoniesPage";
import { FaWhatsapp } from "react-icons/fa";
import { poojaService } from "./services/poojaService";
import { havanService } from "./services/havanService";
import { CONTACT_INFO } from "./constants/contactInfo";

export default function App() {
  // State to manage the current view: 'home', 'all-poojas', 'all-havans', or 'testimonies'
  const [currentView, setCurrentView] = useState('home');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [poojas, setPoojas] = useState([]);
  const [havans, setHavans] = useState([]);

  // Fetch poojas and havans from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [poojasData, havansData] = await Promise.all([
          poojaService.getAllPoojas(),
          havanService.getAllHavans()
        ]);
        setPoojas(poojasData);
        setHavans(havansData);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch data:', err);
        setError('Failed to load data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to navigate
  const navigateTo = (view) => {
    console.log("navigateTo called with:", view);
    setCurrentView(view);
    // Optional: Scroll to the top when changing pages
    window.scrollTo(0, 0);
  };
  
  return (
    <div className="pt-16 sm:pt-20 font-devanagari bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50 text-primary dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 dark:text-text-dark transition-colors duration-300">
      {/* Pass the navigation function down to Navbar */}
      <Navbar navigateTo={navigateTo} /> 
      
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300">Loading poojas...</p>
          </div>
        </div>
      ) : error ? (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center px-4">
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition"
            >
              Retry
            </button>
          </div>
        </div>
      ) : currentView === 'home' ? (
        <>
          {/* Default Landing Page View */}
          <FrontPage navigateTo={navigateTo} />
          <PoojaGrid items={poojas} />
          <BookingSection poojas={poojas} havans={havans} /> {/* Pass both poojas and havans for dropdown */}
        </>
      ) : currentView === 'all-poojas' ? (
        // Dedicated Pooja List Page View
        <>
          <PoojaListPage poojas={poojas} navigateTo={navigateTo} />
          <BookingSection poojas={poojas} havans={havans} />
        </>
      ) : currentView === 'all-havans' ? (
        // Dedicated Havan List Page View
        <>
          <HavanListPage havans={havans} navigateTo={navigateTo} />
          <BookingSection poojas={poojas} havans={havans} />
        </>
      ) : currentView === 'testimonies' ? (
        // Testimonies Page View
        <TestimoniesPage navigateTo={navigateTo} />
      ) : null}
      
      <Footer />

      {/* Floating WhatsApp Button */}
<a
  href={CONTACT_INFO.whatsappLink(CONTACT_INFO.phone, CONTACT_INFO.whatsappMessage)}
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg text-2xl sm:text-3xl z-50 touch-manipulation min-w-[56px] min-h-[56px] flex items-center justify-center"
  aria-label="Contact us on WhatsApp"
>
  <FaWhatsapp />
</a>
    </div>
  );
}