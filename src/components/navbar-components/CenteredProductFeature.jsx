import React from 'react';
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import "../styles/style.css";

const CenteredProductFeature = () => {
  const features = [
    {
      name: 'Product Feature #1',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Product Feature #2',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: LockClosedIcon,
    },
    {
      name: 'Product Feature #3',
      description:
        'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Product Feature #4',
      description:
        'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
      icon: FingerPrintIcon,
    },
  ];

  return (
    <div className="feature-section">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="title">Introducing Geoguesser 2.0</h2>
          <p className="subtitle">Everything you need to deploy your app</p>
          <p className="description">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
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
