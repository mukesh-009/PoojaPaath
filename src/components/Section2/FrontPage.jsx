import React from "react";

export default function FrontPage({ navigateTo }) {
  const handleExplorePoojas = () => {
    navigateTo("all-poojas");
  };

  const handleExploreHavans = () => {
    navigateTo("all-havans");
  };

  const handleBookNowClick = (e) => {
    e.preventDefault();
    // Small delay to ensure smooth scroll
    setTimeout(() => {
      const bookingSection = document.getElementById("booking");
      if (bookingSection) {
        bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      {/* HOME SECTION */}
      <section
        id="home"
        className="bg-gradient-to-b from-orange-100 via-orange-50 to-amber-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 pt-20 sm:pt-24 md:pt-28 pb-12 sm:pb-16 text-center transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-maroon dark:text-orange-300 leading-tight drop-shadow-sm">
            Book Authentic Poojas & Havans Across India 🪔
          </h1>
          <p className="mt-4 text-text-light dark:text-gray-400 text-base sm:text-lg px-2">
            Connect with verified pandits and experience seamless spiritual
            services, wherever you are.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 px-4">
            <button
              onClick={handleExplorePoojas}
              className="w-full sm:w-auto border-2 border-orange-600 bg-orange-600 text-white px-8 py-3.5 sm:py-3 rounded-md hover:bg-orange-700 hover:border-orange-700 dark:bg-orange-500 dark:border-orange-500 dark:hover:bg-orange-600 font-bold text-base sm:text-lg transition duration-200 min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl"
            >
              Explore Poojas
            </button>
            <button
              onClick={handleExploreHavans}
              className="w-full sm:w-auto border-2 border-orange-600 bg-orange-600 text-white px-8 py-3.5 sm:py-3 rounded-md hover:bg-orange-700 hover:border-orange-700 dark:bg-orange-500 dark:border-orange-500 dark:hover:bg-orange-600 font-bold text-base sm:text-lg transition duration-200 min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl"
            >
              Explore Havans
            </button>
            <button
              onClick={handleBookNowClick}
              className="w-full sm:w-auto border-2 border-orange-600 bg-orange-600 text-white px-8 py-3.5 sm:py-3 rounded-md hover:bg-orange-700 hover:border-orange-700 dark:bg-orange-500 dark:border-orange-500 dark:hover:bg-orange-600 font-bold text-base sm:text-lg transition duration-200 min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}