import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-dark/80 backdrop-blur-sm z-50 border-b border-dark-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
            <a href="#portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}