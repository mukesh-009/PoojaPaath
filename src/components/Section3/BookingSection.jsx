import React from 'react';

// Accept poojas array as a prop
export default function BookingSection({ poojas }) {
  // Dynamically generate pooja options from the data prop
  const poojaOptions = poojas.map(p => p.title);
  
  return (
    // Background colors updated
    <section id="booking" className="py-16 bg-orange-50 dark:bg-bg-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-8 md:p-12 border-t-4 border-primary dark:border-accent">
          
          {/* Heading and subtext colors updated */}
          <h2 className="text-white text-3xl md:text-4xl font-extrabold text-primary dark:text-accent text-center mb-4">
            Ready to Book Your Pooja? 🔔
          </h2>
          <p className="text-center text-text-light dark:text-gray-300 mb-8 max-w-lg mx-auto">
            Fill in your details, and our dedicated team will contact you shortly to confirm your booking and pandit assignment.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-gray-300 mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-text-dark"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-light dark:text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="+91 12345 67890"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-text-dark"
                required
              />
            </div>

            <div>
              <label htmlFor="pooja" className="block text-sm font-medium text-text-light dark:text-gray-300 mb-1">
                Select Pooja/Service
              </label>
              <select
                id="pooja"
                name="pooja"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-text-dark appearance-none"
                defaultValue=""
                required
              >
                <option value="" disabled>-- Select a Pooja --</option>
                {/* Dynamically render pooja options */}
                {poojaOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
                <option value="Other/Custom Pooja">Other/Custom Pooja</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-secondary py-3 rounded-md font-bold text-lg hover:bg-orange-700 dark:bg-accent dark:hover:bg-orange-500 transition duration-300 shadow-md transform hover:scale-[1.01]"
            >
              Request a Call & Book
            </button>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                * Our pandits serve across all major cities in India.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}