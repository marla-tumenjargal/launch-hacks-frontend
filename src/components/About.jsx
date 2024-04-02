import React from 'react';
import './style.css';

const stats = [
  { id: 1, name: 'Fact 1', value: '44 million' },
  { id: 2, name: 'Fact 2', value: '$119 trillion' },
  { id: 3, name: 'Fact 3', value: '46,000' },
];

const About = () => {
  return (
    <div className="about-section bg-white py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item mx-auto flex flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default About;