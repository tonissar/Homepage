import React from 'react';

export default function Stats() {
  const stats = [
    { id: 1, name: 'Active Marketplaces', value: '10+' },
    { id: 2, name: 'Monthly Transactions', value: '$2M+' },
    { id: 3, name: 'Registered Users', value: '50K+' },
    { id: 4, name: 'Countries Served', value: '6' },
  ];

  return (
    <div className="bg-dark-lighter relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent-blue/10" />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Trusted by businesses across the Middle East
          </h2>
          <p className="mt-3 text-xl text-gray-300 sm:mt-4">
            Our platforms connect thousands of businesses, enabling millions in transactions
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-4 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col">
              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
                {stat.name}
              </dt>
              <dd className="order-1 text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-accent-purple to-accent-blue">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}