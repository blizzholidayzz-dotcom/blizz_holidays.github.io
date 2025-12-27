
const images = [
  { src: '/2.jpeg', alt: 'Blizz Holidayz Image 1' },
  { src: '/3.jpeg', alt: 'Blizz Holidayz Image 2' },
  { src: '/4.jpeg', alt: 'Blizz Holidayz Image 3' },
  { src: '/5.jpeg', alt: 'Blizz Holidayz Image 4' },
  { src: '/6.jpeg', alt: 'Blizz Holidayz Image 5' },
  { src: '/7.jpeg', alt: 'Blizz Holidayz Image 6' },
  { src: '/8.jpeg', alt: 'Blizz Holidayz Image 7' },
  { src: '/9.jpeg', alt: 'Blizz Holidayz Image 8' },
];

export default function Gallery() {
  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Gallery</h2>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-marquee">
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-80 mx-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
