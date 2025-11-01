import React, { useState } from 'react';
import { bookingService } from '../../services/bookingService';

// Accept poojas and havans arrays as props
export default function BookingSection({ poojas, havans }) {
  const [showPopup, setShowPopup] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  React.useEffect(() => {
    // Only auto-scroll to booking if the hash contains a 'service' parameter
    // Example: #booking?service=Rudrabhishek%20Pooja
    const hash = window.location.hash || '';
    if (hash.includes('booking') && hash.includes('?')) {
      const params = new URLSearchParams(hash.split('?')[1]);
      const serviceParam = params.get('service');
      if (serviceParam) {
        // Slight delay to ensure component is mounted
        setTimeout(() => {
          const bookingSection = document.getElementById('booking');
          if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
          }
          // Remove the hash from URL to avoid accidental auto-scroll later
          try {
            history.replaceState(null, '', window.location.pathname + window.location.search);
          } catch (err) {
            // ignore
          }
        }, 100);
      }
    }
  }, []);
  
  React.useEffect(() => {
    // Check for service in URL hash when component mounts
    const hashParams = new URLSearchParams(window.location.hash.split('?')[1]);
    const selectedService = hashParams.get('service');
    
    if (selectedService) {
      const select = document.getElementById('pooja');
      if (select) {
        // Try to find the service in poojas first
        const pooja = poojas.find(p => p.title === selectedService);
        if (pooja) {
          select.value = `Pooja: ${selectedService}`;
        } else {
          // If not found in poojas, check havans
          const havan = havans.find(h => h.title === selectedService);
          if (havan) {
            select.value = `Havan: ${selectedService}`;
          }
        }
      }
    }
  }, [poojas, havans]);
  
  // Dynamically generate options from both poojas and havans
  const poojaOptions = poojas.map(p => ({ title: p.title, type: 'Pooja' }));
  const havanOptions = havans.map(h => ({ title: h.title, type: 'Havan' }));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(e.target);
    const bookingData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      pooja: formData.get('pooja'),
    };

    try {
      // Show success popup immediately since we're in development/demo mode
      setShowPopup(true);
      // Reset form
      e.target.reset();
      // Hide popup after 8 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 8000);

      // Optional: If you have a backend service ready, uncomment this:
      // await bookingService.createBooking(bookingData);
      
    } catch (error) {
      console.error('Booking submission failed:', error);
      setErrorMessage('Failed to submit booking. Please try again or contact us via WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    // Background colors updated
    <section id="booking" className="py-10 sm:py-16 bg-gradient-to-b from-orange-50 via-amber-100/70 to-orange-100/80 dark:from-gray-900 dark:via-gray-800/90 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-xl p-6 sm:p-8 md:p-12 border-t-4 border-primary dark:border-accent">
          
          {/* Heading and subtext colors updated */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-maroon dark:text-orange-300 text-center mb-3 sm:mb-4">
            Book Your Ceremony
          </h2>
          <p className="text-center text-sm sm:text-base text-text-light dark:text-gray-300 mb-6 sm:mb-8 max-w-lg mx-auto px-2">
            Select your preferred pooja or havan from the dropdown below. Our dedicated team will contact you shortly to confirm your booking and pandit assignment.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
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
                <option value="" disabled>-- Select a Service --</option>
                <optgroup label="Poojas">
                  {poojaOptions.map((option) => (
                    <option key={option.title} value={`${option.type}: ${option.title}`}>
                      {option.title}
                    </option>
                  ))}
                </optgroup>
                <optgroup label="Havans">
                  {havanOptions.map((option) => (
                    <option key={option.title} value={`${option.type}: ${option.title}`}>
                      {option.title}
                    </option>
                  ))}
                </optgroup>
                <option value="Other/Custom Service">Other/Custom Service</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className={`w-full border-2 border-orange-600 bg-orange-600 text-white px-8 py-3.5 sm:py-3 rounded-md hover:bg-orange-700 hover:border-orange-700 dark:bg-orange-500 dark:border-orange-500 dark:hover:bg-orange-600 font-bold text-base sm:text-lg transition duration-200 min-h-[48px] touch-manipulation shadow-lg hover:shadow-xl ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {submitting ? 'Submitting...' : 'Request a Call & Book'}
            </button>
            <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                * Our pandits serve across all major cities in India.
            </p>
          </form>

        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 animate-fadeIn">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 max-w-md w-full transform animate-scaleIn">
            <div className="text-center">
              <div className="text-6xl mb-6 animate-bounce">🕉️</div>
              <h3 className="text-xl sm:text-2xl font-bold text-maroon dark:text-orange-300 mb-4">
                Booking Successfully Received!
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-3 text-base sm:text-lg">
                Thank you for choosing our services. Our team will contact you shortly to confirm your {submitting ? '' : document.getElementById('pooja')?.value?.toLowerCase() || 'booking'}.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                For any urgent queries, feel free to contact us via WhatsApp.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="border-2 border-orange-600 bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 hover:border-orange-700 dark:bg-orange-500 dark:border-orange-500 dark:hover:bg-orange-600 font-bold transition duration-200 shadow-lg hover:shadow-xl"
              >
                OK, Got It!
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
