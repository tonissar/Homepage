import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen pt-16 pb-32 overflow-hidden bg-hero-pattern">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-accent-purple/10 to-transparent opacity-20" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[calc(100vh-12rem)]">
          <div className="max-w-3xl mx-auto">
            <div>
              <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tight text-white leading-tight text-center">
                Connecting Business in the GCC
              </h1>
              <p className="mt-8 text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto text-center">
                We specialize in digital platforms that connect businesses across the GCC region, driving visibility, growth, and industry-specific solutions
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  href="#portfolio"
                  className="inline-flex items-center px-6 py-3 border border-primary/30 shadow-sm text-base font-medium rounded-md text-white bg-dark-lighter hover:bg-dark-accent transition-all duration-300"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
