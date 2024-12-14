import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-dark-lighter py-16 sm:py-24">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Get in Touch</h2>
          <p className="mt-4 text-base text-gray-300">We'd love to hear from you</p>
        </div>
        
        <form className="space-y-6 bg-dark-accent rounded-2xl p-8 shadow-xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 block w-full rounded-md bg-dark-lighter border-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent px-4 py-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 block w-full rounded-md bg-dark-lighter border-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent px-4 py-2"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full rounded-md bg-dark-lighter border-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent px-4 py-2"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="mt-1 block w-full rounded-md bg-dark-lighter border-dark text-white shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent px-4 py-2"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-primary to-accent-blue hover:from-primary-dark hover:to-accent-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}