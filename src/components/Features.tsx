import React from 'react';
import { Globe, BarChart3, Users2 } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Regional Expertise',
      description: 'Deep understanding of GCC markets and business practices',
      icon: Globe,
    },
    {
      name: 'Data-Driven Insights',
      description: 'Advanced analytics and reporting tools for business growth',
      icon: BarChart3,
    },
    {
      name: 'Community Building',
      description: 'Foster connections between buyers and sellers in niche markets',
      icon: Users2,
    },
  ];

  return (
    <div id="features" className="py-24 bg-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent-purple/10 to-transparent opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.1),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary-light font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-2xl md:text-3xl font-display font-bold tracking-tight text-white">
            Built for GCC Markets
          </p>
          <p className="mt-4 max-w-2xl text-base text-gray-300 lg:mx-auto">
            Our platforms are designed specifically for the unique needs of GCC businesses
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-r from-primary to-accent-blue border border-primary/20 text-white shadow-lg">
                  <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}