import React from "react";
import { useNavigate } from "react-router-dom";

export default function FrontPage() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/explore");
  };

  return (
    <>
      {/* HOME SECTION */}
      <section
        id="home"
        className="bg-gradient-to-r from-secondary to-orange-50 dark:to-bg-dark pt-28 pb-16 text-center transition-colors duration-300"
      >
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-accent dark:text-primary leading-tight">
            Book Authentic Poojas & Havans Across India 🪔
          </h1>
          <p className="mt-4 text-text-light dark:text-gray-400 text-lg">
            Connect with verified pandits and experience seamless spiritual
            services, wherever you are.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={handleExploreClick}
              className="border-2 bg-primary text-secondary px-6 py-2 rounded-md hover:opacity-90 dark:bg-accent dark:hover:bg-orange-500"
            >
              Explore Poojas
            </button>
            <a
              href="#booking"
              className="border-2 border-primary text-primary px-6 py-2 rounded-md hover:bg-primary hover:text-secondary dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-bg-dark transition"
            >
              Book Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}