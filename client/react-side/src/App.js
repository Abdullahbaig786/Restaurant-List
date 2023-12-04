// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RestaurantDetail from "./components/RestaurantDetail";

function App() {
  return (
    <Router>
      <Navbar /> {/* Include Navbar here */}
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
