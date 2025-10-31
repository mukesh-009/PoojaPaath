import React from 'react';
import PoojaCard from '../Section2/PoojaCard';

export default function PoojaListPage({ poojas }) {
  return (
    <div className="min-h-screen pt-28 text-center pb-16 bg-secondary dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-primary dark:text-accent mb-4 border-b pb-2 border-primary/20 dark:border-accent/20">
          All Pooja Services 🛕
        </h1>
        <p className="text-lg text-text-light dark:text-gray-400 mb-12">
          Explore our complete catalog of authentic Hindu rituals, customizable for your needs.
        </p>

        {/* Display all poojas in one grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {poojas.map((p) => (
            <PoojaCard key={p.id} p={p} />
          ))}
        </div>

        {/* CTA to Booking Section */}
        <div className="text-center mt-16">
          <a
            href="#booking"
            className="bg-primary text-secondary px-8 py-3 rounded-full font-bold text-xl hover:bg-accent transition dark:bg-accent dark:text-primary"
          >
            Ready to Book? Inquire Now!
          </a>
        </div>
      </div>
    </div>
  );
}