import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import './style.css'; 
import {BottomHeroOne} from "../assets" 

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates.',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon,
  },
  {
    name: 'Database backups.',
    description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon,
  },
];

const ProductFeature = () => {
  return (
    <div className="feature-section">
      <div className="container">
        <div className="grid-container">
          <div className="content">
            <h2 className="title">Product Feature</h2>
            <p className="subtitle">Product Feature Text</p>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
              iste dolor cupiditate blanditiis ratione.
            </p>
            <ul className="feature-list">
              {features.map((feature, index) => (
                <li key={index} className="feature-item">
                  <feature.icon className="feature-icon" />
                  <span className="feature-name">{feature.name}</span>
                  <span className="feature-description">{feature.description}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={BottomHeroOne} 
            alt="Hero-image"
            className="screenshot"
            width={2432}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
