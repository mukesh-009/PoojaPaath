import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import PoojaCard from '../Section2/PoojaCard';

export default function PoojaListPage({ poojas, navigateTo }) {
  const handleBackToHome = () => {
    navigateTo('home');
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 text-center pb-12 sm:pb-16 bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back to Home Button */}
        <div className="mb-4 sm:mb-6 text-left">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-sm sm:text-base text-maroon dark:text-orange-300 hover:text-orange-700 dark:hover:text-orange-400 font-semibold transition-colors duration-200 group touch-manipulation min-h-[44px]"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </button>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-maroon dark:text-orange-300 mb-3 sm:mb-4 border-b pb-2 border-maroon/30 dark:border-orange-300/30 px-2">
          All Pooja Services 🛕
        </h1>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-400 mb-8 sm:mb-12 px-4">
          Explore our complete catalog of authentic Hindu rituals, customizable for your needs.
        </p>

        {/* Display all poojas in one grid */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {poojas.map((p) => (
            <PoojaCard key={p.id} p={p} type="Pooja" />
          ))}
        </div>

        {/* CTA to Booking Section */}
        <div className="text-center mt-10 sm:mt-16 px-4">
          <button
            type="button"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-secondary px-6 sm:px-8 py-3 rounded-full font-bold text-base sm:text-xl hover:bg-accent transition dark:bg-accent dark:text-primary min-h-[48px] flex items-center justify-center touch-manipulation"
          >
            Ready to Book? Inquire Now!
          </button>
        </div>
      </div>
    </div>
  );
}