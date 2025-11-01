import React from "react";
import ReviewCard from "./ReviewCard";
import { reviews } from "../../data/sampleReviews";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 sm:py-20 bg-gradient-to-b from-amber-100/90 via-orange-50/95 to-amber-100/90 dark:from-gray-800 dark:via-gray-700/90 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-full p-3 sm:p-4 inline-block shadow-lg">
              <span className="text-3xl sm:text-4xl">🙏</span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-maroon dark:text-orange-300 mb-4 sm:mb-6 px-2 drop-shadow-sm">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto px-4 font-medium">
            Don't just take our word for it. Read what our satisfied customers have to say about their pooja booking experience with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
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
    </section>
  );
}

