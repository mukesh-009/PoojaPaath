import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { CONTACT_INFO, SOCIAL_LINKS } from "../../constants/contactInfo";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        
        <div>
          <h2 className="text-lg font-bold mb-2">Pooja Paath</h2>
          <p>Bringing devotion closer to you.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li>
              <button
                type="button"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="hover:text-orange-400"
              >
                Book Now
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Contact</h3>
          <a 
            href={`tel:${CONTACT_INFO.phone.replace(/\D/g, '')}`} 
            className="hover:text-orange-400 block mb-3"
          >
            {CONTACT_INFO.phoneFormatted}
          </a>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-3 text-2xl">
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube />
            </a>
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      <p className="text-center text-sm mt-8 text-gray-400">
        © 2025 Pooja Paath. All rights reserved.
      </p>
    </footer>
  );
}