import React from 'react';
import "../styles/style.css";
import { GlobeAltIcon, PuzzleIcon, LightningBoltIcon, GlobeIcon } from '@heroicons/react/20/solid'; // Updated icon imports
import { BottomHeroOne } from '../../assets';

const features = [
  {
    description:
      'We offer a variety of quizzes and trivia challenges that make the process of learning geography engaging.',
    icon: GlobeAltIcon,
  },
  {
    description:
      'With multiple question formats including MCQ, and map pinpoint, GeoQuiz caters to different learning styles and preferences. This accessibility ensures that every user can engage with geography in ways that best suit their personal needs.',
    icon: PuzzleIcon,
  },
  {
    description:
      'GeoQuiz is powered by ChatGPTs API model, making it perfect for users to track their progress within each question and to answer a variety of updated questions.',
    icon: LightningBoltIcon,
  },
  {
    description:
      'GeoQuiz allows for an all-in-one learning experience by learning new countries, capitals, and landmarks.',
    icon: GlobeIcon,
  },
];

export default function Example() {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <div className="feature-info">
          <h2 className="feature-title">An all-in-one platform</h2>
          <p className="feature-subtitle">Explore the world faster with GeoQuiz.</p>
          <p className="feature-description">
            Access GeoQuiz anytime, anywhere.
          </p>
          <dl className="feature-list">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <dt className="feature-icon">
                  <feature.icon className="icon" aria-hidden="true" />
                </dt>
                <dd className="feature-text">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className='padding'/> 
      
      <img
        src={BottomHeroOne}
        alt="Product screenshot"
        className="product-screenshot"
      />

    </div>
  );
}
