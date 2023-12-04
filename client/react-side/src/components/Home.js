// Home.js
import React from "react";
import { Link } from "react-router-dom";
import Restaurant from "./Restaurant";

const Home = () => {
  const restaurants = [
    {
      id: "1",
      name: "Restaurant 1",
      contact: "123-456-7890",
      description: "Lorem ipsum 1",
    },
    {
      id: "2",
      name: "Restaurant 2",
      contact: "987-654-3210",
      description: "Lorem ipsum 2",
    },
    // Add more restaurants as needed
  ];

  return (
    <div className="flex">
      {restaurants.map((restaurant) => (
        <Link to={`/restaurant/${restaurant.id}`} key={restaurant.id}>
          <Restaurant {...restaurant} />
        </Link>
      ))}
    </div>
  );
};

export default Home;
