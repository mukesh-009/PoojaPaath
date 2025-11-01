import React from "react";
import { FaStar } from "react-icons/fa";

export default function ReviewCard({ review }) {
  // Generate star elements based on rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
      />
    ));
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-5 sm:p-7 shadow-xl hover:shadow-2xl transition duration-300 border-2 border-orange-100 dark:border-orange-900/50 hover:border-orange-300 dark:hover:border-orange-700">
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-2 sm:mb-3">
        {renderStars(review.rating)}
      </div>

      {/* Review Comment */}
      <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed line-clamp-4">
        "{review.comment}"
      </p>

      {/* Pooja Name */}
      <div className="mb-4">
        <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs font-semibold px-3 py-1 rounded-full">
          {review.pooja}
        </span>
      </div>

      {/* Reviewer Info */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-bold text-primary dark:text-orange-300">
              {review.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {review.location}
            </p>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {review.date}
          </p>
        </div>
      </div>
    </div>
  );
}

