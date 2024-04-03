import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import "../styles/style.css";

const CenteredProductFeature = () => {
  const features = [
    {
      name: 'Engaged Learning Experience',
      description:
        'We offer a variety of quizzes and trivia challenges that makes the process of learning geography engaging.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Accessibility',
      description:
        'With multiple question formats including FRQ, MCQ, and map pinpoint, GeoQuiz caters to different learning styles and preferences. This accessbility ensures that every user can engage with geography in ways that best suit their personal needs. ',
      icon: LockClosedIcon,
    },
    {
      name: 'AI-Powered Insights',
      description:
        'GeoQuiz is powered by ChatGPTs API model, making it perfect for users to track their progress within each question and to answer a variety of updated questions.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Explore the globe',
      description:
        'GeoQuiz allows for an all-in-one learning experience by learning new countries, capitals, and landmarks.',
      icon: FingerPrintIcon,
    },
  ];

  return (
    <div className="feature-section">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="title">Introducing GeoQuiz</h2>
          <p className="subtitle"> Why we offer accessible geography education </p>
          <p className="description">
            Geography education is not universal in quality and accessibility for many students throughout the world. Thus, GeoQuiz aims to provide a way for students to explore, learn, and understand our world better through a personalized learning experience.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid-container">
            {features.map((feature) => (
              <div key={feature.name} className="feature-item">
                <dt className="title">
                  <div className="feature-icon">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="description">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default CenteredProductFeature;
