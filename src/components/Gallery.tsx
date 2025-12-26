import { useState } from 'react';

const destinations = [
  {
    title: 'Beach Paradise',
    image: 'https://images.pexels.com/photos/457881/pexels-photo-457881.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Mountain Escape',
    image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-green-500 to-emerald-600',
  },
  {
    title: 'Cultural Tours',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'City Adventures',
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'Wildlife Safari',
    image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    title: 'Island Hopping',
    image: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=800',
    color: 'from-teal-500 to-cyan-600',
  },
];

export default function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600 mb-4">
            Popular Destinations
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Explore amazing places around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className={`absolute inset-0 bg-gradient-to-t ${destination.color} opacity-60 group-hover:opacity-70 transition-opacity duration-500`}></div>

              <div className="absolute inset-0 flex items-end p-8">
                <div className="transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {destination.title}
                  </h3>
                  <div className={`w-20 h-1 bg-white rounded-full transform transition-all duration-500 ${
                    hoveredIndex === index ? 'w-32' : 'w-20'
                  }`}></div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
