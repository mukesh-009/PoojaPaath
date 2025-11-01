import React from "react";
import PoojaCard from "./PoojaCard";

export default function PoojaGrid({ items }) {
  // Filter to show only these 4 popular poojas
  const popularPoojas = items.filter(p => 
    p.id === "durga-path" || 
    p.id === "baglamukhi-poojan" || 
    p.id === "tripindi-shradh" || 
    p.id === "narayani-bali"
  );

  return (
    <section id="poojas" className="w-full py-10 sm:py-16 bg-gradient-to-b from-amber-50 via-orange-50/80 to-orange-50 dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-maroon dark:text-orange-300 text-center px-2 mb-6 sm:mb-8">
          Popular Poojas
        </h2>
        
        {/* Static Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularPoojas.map((p) => (
            <PoojaCard key={p.id} p={p} type="Pooja" />
          ))}
        </div>
      </div>
    </section>
  );
}