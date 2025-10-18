import React from "react";
import PoojaCard from "./PoojaCard";

export default function PoojaGrid({ items }) {
  return (
    <section id="poojas" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-maroon mb-8 text-center">
        Popular Poojas
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {items.map((p) => (
          <PoojaCard key={p.id} p={p} />
        ))}
      </div>
    </section>
  );
}