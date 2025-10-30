import React from "react";
import PoojaCard from "./PoojaCard";

export default function PoojaGrid({ items }) {
  // Duplicate the items array to create a seamless looping effect
  const marqueeItems = [...items, ...items];

  return (
    <section id="poojas" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-maroon dark:text-orange-300 mb-8 text-center">
        Popular Poojas
      </h2>
      
      {/* Outer Container: Hides the content that has scrolled off-screen */}
      <div className="relative w-full overflow-hidden">
        
        {/* Inner Container: Applies the Marquee Animation
            - flex: keeps all duplicated items in a row
            - space-x-6: maintains spacing between cards
            - animate-marquee: applies the custom continuous animation
        */}
        <div className="flex space-x-6 animate-marquee">
          {marqueeItems.map((p, index) => (
            // Use a unique key by combining id and index
            <div key={`${p.id}-${index}`} className="min-w-[300px] flex-shrink-0">
              <PoojaCard p={p} />
            </div>
          ))}
        </div>
        
      </div>
      
    </section>
  );
}