import { useState } from 'react';
import { Star } from 'lucide-react';

export default function GoogleReview() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Enjoying our service?</h2>
        <p className="text-lg text-gray-600 mb-8">Leave us a review on Google!</p>
        <div className="flex justify-center mb-8">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={`text-4xl ${index <= (hover || rating) ? "text-yellow-500" : "text-gray-400"}`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <Star fill={index <= (hover || rating) ? "currentColor" : "none"} />
              </button>
            );
          })}
        </div>

        <a
          href="https://share.google/ehdOGIORhqnMHzNKC"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
        >
          Leave a Review
        </a>
      </div>
    </div>
  );
}
