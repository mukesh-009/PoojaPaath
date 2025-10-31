import React from "react";
// formatPrice is correctly defined here
const formatPrice = (num) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(num);

export default function PoojaCard({ p }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition duration-300">
      <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-maroon dark:text-orange-300">{p.title}</h3>
        
        <div className="mt-4 flex justify-between items-center">
          {/* Using the formatPrice utility for clean, standardized price display */}
          <span className="text-maroon dark:text-orange-400 font-extrabold text-lg">
            {formatPrice(p.price)}
          </span>
          <a
            href="#booking"
            className="bg-maroon text-white text-md px-4 py-2 rounded-full font-semibold hover:bg-orange-700 dark:bg-accent dark:hover:bg-orange-500 transition shadow-md"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}