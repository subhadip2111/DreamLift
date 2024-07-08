// CareerPathResults.jsx

import React from 'react';

const CareerPathResults = ({ examName, percentage, year }) => {
  // Dummy data for illustration
  const opportunities = [
    { id: 1, title: 'Software Engineer at Tech Company', description: 'Exciting opportunity for graduates with computer science background.', qualification: 'B.Tech/B.E. in Computer Science' },
    { id: 2, title: 'Marketing Analyst at Startup', description: 'Entry-level position for marketing enthusiasts.', qualification: 'MBA in Marketing' },
    { id: 3, title: 'Financial Analyst at Finance Firm', description: 'Analytical role focusing on financial forecasting and data analysis.', qualification: 'MBA in Finance' },
  ];

  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Opportunities Based on Your Qualifications</h2>
      <div className="space-y-4">
        {opportunities.map(opportunity => (
          <div key={opportunity.id} className="bg-white shadow-md rounded p-4">
            <h3 className="text-lg font-semibold mb-2">{opportunity.title}</h3>
            <p className="text-gray-700 mb-2">{opportunity.description}</p>
            <p className="text-gray-600">{opportunity.qualification}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPathResults;
