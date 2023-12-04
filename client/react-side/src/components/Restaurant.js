// Restaurant.js
import React, { useState } from "react";

const Restaurant = ({ name, contact, description }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Contact: {contact}</p>
        {showDetails && (
          <p className="text-gray-700 text-base">Description: {description}</p>
        )}
      </div>
      <div className="px-6 py-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleToggleDetails}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
      </div>
    </div>
  );
};

export default Restaurant;
