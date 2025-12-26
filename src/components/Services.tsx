import { Plane, Hotel, Mountain, Camera, Map, Compass } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Best deals on domestic and international flights',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Hotel,
    title: 'Hotel Reservations',
    description: 'Comfortable stays at the best prices',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Mountain,
    title: 'Adventure Tours',
    description: 'Thrilling experiences for adventure lovers',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Camera,
    title: 'Photography Tours',
    description: 'Capture memories at stunning locations',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Map,
    title: 'Custom Packages',
    description: 'Tailored itineraries for your dream vacation',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Compass,
    title: 'Travel Guidance',
    description: 'Expert advice for seamless travel',
    color: 'from-teal-500 to-teal-600',
  },
];

export default function Services() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-blue-50 opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 mb-4 animate-fade-in-up">
            Our Services
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Comprehensive travel solutions for your perfect holiday
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
