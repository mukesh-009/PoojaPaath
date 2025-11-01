import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import ReviewCard from '../Section3/ReviewCard';
import { reviews } from '../../data/sampleReviews';

export default function TestimoniesPage({ navigateTo }) {
  const handleBackToHome = () => {
    navigateTo('home');
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-28 text-center pb-12 sm:pb-16 bg-gradient-to-b from-orange-50 via-amber-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Back to Home Button */}
        <div className="mb-4 sm:mb-6 text-left">
          <button
            onClick={handleBackToHome}
            className="inline-flex items-center gap-2 text-sm sm:text-base text-maroon dark:text-orange-300 hover:text-orange-700 dark:hover:text-orange-400 font-semibold transition-colors duration-200 group touch-manipulation min-h-[44px]"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </button>
        </div>

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-3 sm:p-4 inline-block shadow-lg">
              <span className="text-3xl sm:text-4xl">🙏</span>
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-maroon dark:text-orange-300 mb-4 sm:mb-6 px-2 drop-shadow-sm">
            What Our Customers Say
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4 font-medium">
            Don't just take our word for it. Experience our pooja ceremonies and read testimonials from our satisfied customers.
          </p>
        </div>

        {/* Images Grid */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-maroon dark:text-orange-300 mb-6 text-center">
            Photos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Placeholder for images - replace with actual image paths */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center overflow-hidden"
              >
                {/* Replace this div with <img src="/images/testimony-{item}.jpg" alt="Pooja ceremony {item}" className="w-full h-full object-cover" /> */}
                <span className="text-gray-400 dark:text-gray-500 text-sm text-center px-2">
                  Image {item}<br/>Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Videos Grid */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-maroon dark:text-orange-300 mb-6 text-center">
            Videos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder for videos - replace with actual video paths */}
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-video bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center justify-center overflow-hidden"
              >
                {/* Replace this div with:
                <video controls className="w-full h-full object-cover">
                  <source src="/videos/testimony-{item}.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                */}
                <span className="text-gray-400 dark:text-gray-500 text-sm text-center px-2">
                  Video {item}<br/>Coming Soon
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-maroon dark:text-orange-300 mb-6 text-center">
            Customer Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>

        {/* Average Rating Summary */}
        <div className="mt-10 sm:mt-16 text-center px-4">
          <div className="inline-block bg-gradient-to-br from-orange-100 to-amber-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8 shadow-2xl border-2 border-orange-300/50 dark:border-orange-600/30">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-4xl sm:text-5xl font-extrabold text-maroon dark:text-orange-300">
                {reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length}
              </span>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-yellow-500 text-2xl sm:text-3xl drop-shadow-sm">★</span>
                ))}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base font-semibold">
              Based on {reviews.length} customer reviews
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}


