import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          My Website
        </Link>
        <div className="flex space-x-4">
          <Link to="/signin" className="text-white">
            Sign In
          </Link>
          <Link to="/signup" className="text-white">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
