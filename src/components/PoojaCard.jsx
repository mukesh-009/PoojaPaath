import React from "react";
const formatPrice = (num) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(num);

export default function PoojaCard({ p }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition">
      <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-maroon">{p.title}</h3>
        <p className="text-sm text-gray-700 mt-2">{p.short}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-maroon font-bold text-lg">₹{p.price}</span>
          <a
            href="#booking"
            className="bg-maroon text-cream text-sm px-3 py-1 rounded hover:opacity-90"
          >
            Book
          </a>
        </div>
      </div>
    </div>
  );
}