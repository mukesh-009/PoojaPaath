import React from "react";

export default function Footer() {
  return (
    <footer className="bg-maroon text-cream py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Pooja Paath. All rights reserved.</p>
        <a
  href="https://wa.me/919876543210?text=Hello!%20I%20need%20assistance."
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-5 right-5 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
>
  <img src="/Users/mukeshruwali/Project/Haridwar/public/images/WhatsApp.png" alt="WhatsApp" className="h-8 w-8" />
</a>
      </div>
    </footer>
  );
}