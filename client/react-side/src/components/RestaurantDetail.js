// Update RestaurantDetail.js

// Import useState, useEffect, and axios
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    // Fetch restaurant details from the server
    axios
      .get(`/api/restaurants/${id}`)
      .then((response) => setRestaurant(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  const handleEdit = () => {
    // Implement the logic to navigate to the edit page for this restaurant
  };

  const handleDelete = () => {
    // Implement the logic to delete this restaurant
    axios
      .delete(`/api/restaurants/${id}`)
      .then((response) => {
        console.log(response.data);
        // Implement the logic to navigate back to the home page or handle deleted state
      })
      .catch((error) => console.error(error));
  };

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-3xl font-semibold mb-4">{restaurant.name}</h2>
      <p className="text-gray-700 mb-2">
        <span className="font-semibold">Contact:</span> {restaurant.contact}
      </p>
      <p className="text-gray-700 mb-4">
        <span className="font-semibold">Description:</span>{" "}
        {restaurant.description}
      </p>
      <div className="flex space-x-4">
        <button
          onClick={handleEdit}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Edit Restaurant
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        >
          Delete Restaurant
        </button>
      </div>
    </div>
  );
};

export default RestaurantDetail;
