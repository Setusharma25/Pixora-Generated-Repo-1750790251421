import React from 'react';

const ChartCard = ({ icon, title }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-3">{title}</h2>
      </div>
      <div className="bg-gray-700 p-4 rounded-md">
        <p className="text-gray-400">📊 Chart data will go here.</p>
      </div>
    </div>
  );
};

export default ChartCard;