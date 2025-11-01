import React from "react";

export default function PoojaCard({ p, type = "Pooja" }) {
  const handleBookNow = (e) => {
    e.preventDefault();
    // Wait for a short moment to ensure the booking section is loaded
    setTimeout(() => {
      const select = document.getElementById('pooja');
      const bookingSection = document.getElementById('booking');
      
      if (select && bookingSection) {
        const optionValue = `${type}: ${p.title}`;
        
        // First scroll to the booking section
        bookingSection.scrollIntoView({ behavior: 'smooth' });
        
        // Then set the select value after a small delay to ensure the section is visible
        setTimeout(() => {
          const options = Array.from(select.options);
          const targetOption = options.find(opt => opt.value === optionValue);
          
          if (targetOption) {
            select.value = optionValue;
          }
        }, 500);
      }
    }, 100);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition duration-300" style={{ transform: 'translateZ(0)' }}>
      <div className={`w-full h-40 sm:h-44 ${!p.image ? 'bg-orange-100 dark:bg-gray-700 flex items-center justify-center' : ''}`}>
        {p.image ? (
          <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-6xl text-orange-500 dark:text-orange-400">🕉️</div>
        )}
      </div>
      <div className="p-3 sm:p-4 flex flex-col gap-3">
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-maroon dark:text-orange-300 min-h-[3rem] flex items-center justify-center text-center w-full">
          {p.title}
        </h3>
        <button
          type="button"
          onClick={handleBookNow}
          className="bg-maroon text-white text-sm sm:text-base px-5 py-2.5 rounded-full font-semibold hover:bg-orange-700 dark:bg-accent dark:hover:bg-orange-500 transition shadow-md text-center min-h-[44px] flex items-center justify-center touch-manipulation whitespace-nowrap border-2 border-orange-500 dark:border-orange-400 hover:border-orange-600 dark:hover:border-orange-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}