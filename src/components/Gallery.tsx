
const images = [
  { src: '/1.jpeg', alt: 'Blizz Holidayz Image 1' },
  { src: '/s.jpeg', alt: 'Blizz Holidayz Image 2' },
  // Add more images here
];

export default function Gallery() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative h-80 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
