import React from "react";

export default function Footer() {
  return (
    <footer className="bg-maroon text-cream py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Pooja Paath. All rights reserved.</p>
        <p className="text-sm mt-2 md:mt-0">Made with 🪔 and React</p>
      </div>
    </footer>
  );
}