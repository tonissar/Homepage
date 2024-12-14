import React from 'react';
import { Building2, Globe, BarChart3, Users2, ArrowRight, ExternalLink } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <Navbar />
      <Hero />
      <Features />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
