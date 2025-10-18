import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-cream to-orange-50 pt-28 pb-16 text-center"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-maroon leading-tight">
          Book Authentic Poojas & Havans Across India 🪔
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Connect with verified pandits and experience seamless spiritual
          services, wherever you are.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="#poojas"
            className="bg-maroon text-cream px-6 py-2 rounded-md hover:opacity-90"
          >
            Explore Poojas
          </a>
          <a
            href="#booking"
            className="border-2 border-maroon text-maroon px-6 py-2 rounded-md hover:bg-maroon hover:text-cream transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </section>
  );
}