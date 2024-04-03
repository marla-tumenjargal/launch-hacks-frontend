import React from 'react';
import "../styles/style.css";
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import { BottomHeroOne } from '../../assets';

const features = [
  {
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

export default function Example() {
  return (
    <div className="feature-container">
      <div className="feature-content">
        <div className="feature-info">
          <h2 className="feature-title">Deploy faster</h2>
          <p className="feature-subtitle">A better workflow</p>
          <p className="feature-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
            iste dolor cupiditate blanditiis ratione.
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

<div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h1>Keep a record of important events with annotations</h1>
            <p>
              Take timestamped notes right alongside your transcript to keep
              track of the most important sections for future reference.
            </p>
          </div>
        </div>
        <div className="image-content">
          <img src={BottomHeroOne} alt="Hero-image" />
        </div>
      </div>
    </div>
  );
}
