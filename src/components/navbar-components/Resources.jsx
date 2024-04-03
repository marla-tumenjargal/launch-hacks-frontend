import React from "react";
import "../styles/Resources.css";

const geographyResources = [
  [
    "Competitions",
    [
      {
        name: "National Geographic Bee Website",
        url: "https://education.nationalgeographic.com/resource/geography-bee/",
        description:
          "Official website with competition information, eligibility, and study materials.",
      },
      {
        name: "International Geography Bee (IGB)",
        url: "https://www.iacompetitions.com/international-programs/",
        description:
          "International geography competition for grades 4-12 with regional and national levels.",
      },
      {
        name: "The North American Championships (NAC)",
        url: "https://www.northsouth.org/public/USContests/Finals/geography",
        description:
          "Geography competition for grades 6-8 and 9-12 with written and oral rounds.",
      },
    ],
  ],
  [
    "Study Guides and Videos",
    [
      // Existing Geography Bee resources (unchanged)

      {
        name: "National Geographic Education",
        url: "https://education.nationalgeographic.com/",
        description:
          "Interactive maps, lesson plans, and resources for teaching and learning geography.",
        type: "Study Guide", // Add a type property
      },
      {
        name: "Open Geography Education",
        url: "https://opengeographyeducation.org/",
        description:
          "Free, open-source textbooks and resources for geography education.",
        type: "Study Guide",
      },
      {
        name: "World Bank Open Data",
        url: "https://data.worldbank.org/topic/geography",
        description:
          "Access and download global datasets related to geography and demographics.",
        type: "Study Guide",
      },
      {
        name: "Crash Course Geography (YouTube)",
        url: "https://www.youtube.com/playlist?list=PL8dPuCuYrPKz jez6_cIrobvylMwLJJtvT",
        description: "Engaging video series covering various geography topics.",
        type: "Video", // Add a type property
      },
      {
        name: "Geography Now (YouTube)",
        url: "https://www.youtube.com/channel/UCupzzxNFjnFNFUZ-OLgYvwQ",
        description:
          "Informative YouTube channel with videos about countries, flags, and geography.",
        type: "Video",
      },
      {
        name: "Khan Academy: Geography (Video)",
        url: "https://www.khanacademy.org/test-prep/sat/earth-space-science/earth-g/v/intro-to-geography",
        description:
          "Free video lessons and practice exercises for geography concepts.",
        type: "Video",
      },
    ],
  ],
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
        {geographyResources.map((array) => {
          return (
            <div>
              <h2>{array[0]}</h2>
              {array[1].map((resource) => (
                <GeoResourceCard key={resource.name} resource={resource} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Resources;
