import React from 'react';
import { ExternalLink } from 'lucide-react';
// Remove Supabase import

interface Project {
  name: string;
  description: string;
  image: string;
  link?: string;
}
const INITIAL_PROJECTS: Project[] = [
  {
    name: 'UAEFZONE',
    description: "Premier Gateway to UAE business",
    image: '/fzone.jpg',  // Updated path
    link: 'https://uaefzone.com/'
  },
  {
    name: 'Coming Soon',
    description: 'New marketplace launching Q1 2025',
    image: '/coming.jpg'  // Updated path
  }
];
export default function Portfolio() {
  // Remove useState and useEffect since we're using local images directly
  const projects = INITIAL_PROJECTS;

  return (
    <div id="portfolio" className="bg-dark-accent relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/5 via-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-primary-light font-semibold tracking-wide uppercase">Our Work</h2>
          <p className="mt-1 text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
            Our Marketplace Solutions
          </p>
          <p className="max-w-xl mt-4 mx-auto text-base text-gray-300">
            Discover how we're transforming industries with our specialized marketplaces
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12">
          {projects.map((project) => (
            <div key={project.name} className="relative">
              <div className="relative w-full h-64 bg-dark rounded-lg overflow-hidden group-hover:opacity-90 transition-opacity duration-300 border border-dark-lighter/20 shadow-xl sm:h-96">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-center object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = 'https://placehold.co/600x400?text=Image+Loading...';
                  }}
                />
              </div>
              <h3 className="mt-6 text-2xl font-display font-bold">
                {project.link && (
                  <a href={project.link} className="flex items-center hover:text-primary-light transition-colors">
                    <span className="text-white hover:text-primary-light">{project.name}</span>
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                )}
                {!project.link && (
                  <span className="text-white">{project.name}</span>
                )}
              </h3>
              <p className="mt-2 text-base text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
