import React from 'react';
import '../styles/Resources.css';

const geographyResources = [
    {
      name: 'National Geographic Bee Website',
      url: 'https://education.nationalgeographic.com/resource/geography-bee/',
      description:
        'Official website with information about the competition, eligibility, and study materials.',
    },
    {
      name: 'National Geographic Bee Study Materials',
      url: 'https://education.nationalgeographic.com/resource/geography-bee-study-materials/',
      description:
        'Access practice quizzes, sample questions, flashcards, maps, and study guides.',
    },
    {
      name: 'Geography Bee (National Geographic World Championship)',
      url: 'https://world-championship.nationalgeographic.com/',
      description: 'Online resources and practice quizzes for geography enthusiasts.',
    },
    {
      name: 'Sporcle Geography Quizzes',
      url: 'https://www.sporcle.com/games/category/geography',
      description: 'Fun and interactive way to learn geography facts through quizzes.',
    },
    {
      name: 'World Geography Games (National Geographic Kids)',
      url: 'https://kids.nationalgeographic.com/games/geography-games',
      description: 'Educational games for learning about countries and regions.',
    },
    {
      name: 'Sheppards Software Geography Games',
      url: 'https://www.sheppardsoftware.com/Geography.htm',
      description: 'Variety of geography games for students of all ages.',
    },
  ];

function GeoResourceCard({ resource }) {
  return (
    <div className="geo-resource-card">
      <a href={resource.url} className="geo-resource-card-link">
        <h3>{resource.name}</h3>
      </a>
      <p className="geo-resource-card-description">{resource.description}</p>
    </div>
  );
}

function Resources() {
  return (
    <div className="geography-resources-container">
      <h1>Geography Learning Resources</h1>
      <div className="geography-resources-grid">
        {geographyResources.map((resource) => (
          <GeoResourceCard key={resource.name} resource={resource} />
        ))}
      </div>
    </div>
  );
}

export default Resources;
