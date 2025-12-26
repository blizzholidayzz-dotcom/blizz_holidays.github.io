import { useState, useEffect } from 'react';
import { Plane, MapPin } from 'lucide-react';

const videos = [
  'https://www.youtube.com/embed/rSY5d2wgV5c?autoplay=1&mute=1&loop=1&playlist=rSY5d2wgV5c&controls=0&showinfo=0&modestbranding=1&autohide=1',
  'https://www.youtube.com/embed/iUtnZpzkbG8?autoplay=1&mute=1&loop=1&playlist=iUtnZpzkbG8&controls=0&showinfo=0&modestbranding=1&autohide=1',
];

export default function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentVideo((prevVideo: number) => (prevVideo + 1) % videos.length);
        setIsFading(false);
      }, 1000);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {videos.map((video, index) => (
        <iframe
          key={video}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideo && !isFading ? 'opacity-100' : 'opacity-0'
          }`}
          src={video}
          frameBorder="0"
          allow="autoplay; encrypted-media"
        ></iframe>
      ))}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img
            src="/1.jpeg"
            alt="Blizz Holidayz Logo"
            className="h-32 w-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in-up">
          BLIZZ HOLIDAYZ
        </h1>

        <p className="text-2xl md:text-4xl text-white mb-8 animate-fade-in-up animation-delay-200 font-light italic">
          let's travel with us
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
          <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full text-white border border-white/30">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Namakkal | Coimbatore</span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 animate-fade-in-up animation-delay-600">
          <a
            href="https://wa.me/918190056589"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Us
          </a>

          <a
            href="#contact"
            className="group bg-white hover:bg-gray-100 text-red-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
          >
            <Plane className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            Plan Your Trip
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
