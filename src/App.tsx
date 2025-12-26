import Hero from './components/Hero';
import Services from './components/Services';
import BusinessCard from './components/BusinessCard';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Hero />
      <Services />
      <Gallery />
      <BusinessCard />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
